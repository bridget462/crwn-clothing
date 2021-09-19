import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  // react automatically define state at constructor
  state = {
    loading: true,
  };

  // we have to both subscribe to snapshot at mount, as well as unsubscribe at unmount
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapshot) => {
        // we have to format snapshot for our application, such as adding route property.
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // console.log(collectionsMap);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="show-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

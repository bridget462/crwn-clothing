import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

// selector
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
// HOC
import withSpinner from "../with-spinner/with-spinner.component";
// components
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

// compose apply function from right(bottom) to left(up)
// in this case, to CollectionOverview,
// apply withSpinner -> apply connect(mapStateToProps)
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;

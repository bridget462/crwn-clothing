import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ match, title, items }) => {
  console.log(match);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

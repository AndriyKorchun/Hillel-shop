import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ collection: { title, items } }) => (
  <div className="collection-preview">
    <h2 className="collection-preview__title">{ title }</h2>
    <div className="collection-preview__wrapper">
      {
        items.slice(0, 4).map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;

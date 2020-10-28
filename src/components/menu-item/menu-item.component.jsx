import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ imageUrl, title, size }) => (
  <div className={`menu-item ${size || ''}`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <span className="title">{ title.toUpperCase() }</span>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
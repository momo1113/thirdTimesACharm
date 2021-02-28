/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const TopSection = ({ product }) => (
  <div className="top_section">
    <div className="rating_reviews">
      <div className="rating" />
      <p>Read all reviews</p>
    </div>
    <div className="category">
      <p> CATEGORY</p>
      <p>
        {product.category}
      </p>
    </div>
    <div className="name">
      <p>{product.name}</p>
    </div>
    <div className="price">
      <p>{product.default_price}</p>
    </div>
  </div>
);

export default TopSection;

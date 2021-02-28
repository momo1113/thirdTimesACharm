/* eslint-disable react/prop-types */
// eslint-disable-next-line import/newline-after-import
import React from 'react';
import BottomSection from './BottomSection.jsx';
import TopSection from './TopSection.jsx';

const ProductDetails = ({ product, styles }) => (
  <div className="product_detail">
    <TopSection product={product} />
    <BottomSection styles={styles} />

  </div>
);

export default ProductDetails;

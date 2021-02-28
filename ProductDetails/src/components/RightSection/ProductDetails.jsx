/* eslint-disable react/prop-types */
// eslint-disable-next-line import/newline-after-import
import React from 'react';
// eslint-disable-next-line import/extensions
import BottomSection from './BottomSection.jsx';
// eslint-disable-next-line import/extensions
import TopSection from './TopSection.jsx';

const ProductDetails = ({ product, styles }) => (
  <div className="product_detail">
    <TopSection product={product} />
    <BottomSection styles={styles} />

  </div>
);

export default ProductDetails;

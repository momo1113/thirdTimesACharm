/* eslint-disable react/prop-types */
// eslint-disable-next-line import/newline-after-import
import React from 'react';
// eslint-disable-next-line import/extensions
import styled from 'styled-components';
import BottomSection from './BottomSection.jsx';
// eslint-disable-next-line import/extensions
import TopSection from './TopSection.jsx';


const ProductDetails = ({ product, styles, getSelectedStyle }) => (
  <>
    <TopSection product={product} styles={styles} />
    <BottomSection styles={styles} getSelectedStyle={getSelectedStyle} />
  </>
);

export default ProductDetails;

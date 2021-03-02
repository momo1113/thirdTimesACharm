/* eslint-disable react/prop-types */
// eslint-disable-next-line import/newline-after-import
import React from 'react';
// eslint-disable-next-line import/extensions
import styled from 'styled-components';
import BottomSection from './BottomSection.jsx';
// eslint-disable-next-line import/extensions
import TopSection from './TopSection.jsx';


const ProductDetails = ({ product, styles, seletedStyleName }) => (
  <>
    <TopSection product={product} styles={styles} />
    <BottomSection styles={styles} seletedStyleName={seletedStyleName} />
  </>
);

export default ProductDetails;

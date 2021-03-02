/* eslint-disable react/prop-types */
// eslint-disable-next-line import/newline-after-import
import React from 'react';
// eslint-disable-next-line import/extensions
import styled from 'styled-components';
import BottomSection from './BottomSection.jsx';
// eslint-disable-next-line import/extensions
import TopSection from './TopSection.jsx';

const RightSideWrapper = styled.div`
  margin-top:15%;
`;

const ProductDetails = ({ product, styles }) => (
  <RightSideWrapper>
    <TopSection product={product} styles={styles} />
    <BottomSection styles={styles} />

  </RightSideWrapper>
);

export default ProductDetails;

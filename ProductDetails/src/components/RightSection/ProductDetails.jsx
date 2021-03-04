/* eslint-disable react/prop-types */
// eslint-disable-next-line import/newline-after-import
import React from 'react';
// eslint-disable-next-line import/extensions
import BottomSection from './BottomSection.jsx';
// eslint-disable-next-line import/extensions
import TopSection from './TopSection.jsx';

const ProductDetails = ({
  product, styles, getSelectedStyle, selectedStyleName,
}) => (
  <>
    <TopSection product={product} styles={styles} selectedStyleName={selectedStyleName} />
    <BottomSection
      styles={styles}
      getSelectedStyle={getSelectedStyle}
      selectedStyleName={selectedStyleName}
    />
  </>
);

export default ProductDetails;

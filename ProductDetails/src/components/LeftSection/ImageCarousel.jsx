/* eslint-disable react/prop-types */
import React from 'react';

const ImageCarousel = ({ styles }) => {
  if (styles.length !== 0) {
    console.log(styles);
  }
  return (
    <div>
      Here is the image carousel
    </div>
  );
};

export default ImageCarousel;

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  LeftArrow, RightArrow, Image,
  FullscreenArrow, ImageWrapper, ImageUnderline,
} from '../../elements/ImageCarousel.element.jsx';

const ImageCarousel = ({
  styles,
  getCurMainImageIndex,
  getFullScreenClicked, mainCurrent,
  getMainCurrent,
}) => {
  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }

  const length = styles.length - 1;

  const preSlide = () => {
    getMainCurrent(mainCurrent === 0 ? length : mainCurrent - 1);
  };

  const nextSlide = () => {
    getMainCurrent(mainCurrent === length ? 0 : mainCurrent + 1);
  };

  const handleOnClick = () => {
    getCurMainImageIndex(mainCurrent);
    getFullScreenClicked(true);
  };

  const imageUrl = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      index === mainCurrent && (

        <Image key={index} src={url} />

      )
    );
  });
  return (
    <>
      <ImageWrapper>
        <FullscreenArrow onClick={handleOnClick} />
        <LeftArrow onClick={preSlide} />
        <RightArrow onClick={nextSlide} />
        {imageUrl}
      </ImageWrapper>
      {/* <ImageUnderline /> */}
    </>
  );
};

export default ImageCarousel;

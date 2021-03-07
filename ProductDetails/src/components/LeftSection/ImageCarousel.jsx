/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Underline,
  LeftArrow, RightArrow, Image, Thumbnail, ThumbnailWrapper,
  Slider, FullscreenArrow, DownArrow, ImageWrapper, ImageUnderline,
} from '../../elements/ImageCarousel.element.jsx';

const ImageCarousel = ({ styles, getCurMainImageIndex, getFullScreenClicked }) => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }

  const length = styles.length - 1;

  const preSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

  const handleOnClick = () => {
    getCurMainImageIndex(current);
    getFullScreenClicked(true);
  };


  const imageUrl = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      index === current && (
        <ImageWrapper key={index} >
          <FullscreenArrow onClick={handleOnClick} />
          <LeftArrow onClick={preSlide} />
          <RightArrow onClick={nextSlide} />
          <Image key={index} src={url} />
          <ImageUnderline />
        </ImageWrapper>
      )
    );
  });


  const thumbnailUrl = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      <div key={index}>
        <Thumbnail key={index} src={url} alt="Women dress" onClick={() => setCurrent(index)} />
        { index === current && <Underline />}
      </div>
    );
  });


  return (
    <Slider>

      {imageUrl}
      {/* {thumbnailUrl} */}

      <ThumbnailWrapper>
        {thumbnailUrl}
        {styles.length > 7 && <DownArrow />}
      </ThumbnailWrapper>
    </Slider>

  );
};

export default ImageCarousel;

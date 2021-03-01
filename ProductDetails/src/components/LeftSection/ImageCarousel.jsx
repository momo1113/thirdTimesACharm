/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  LeftArrow, RightArrow, Image, Slider, FullscreenArrow, DownArrow,
  // eslint-disable-next-line import/extensions
} from '../../elements/ImageCarousel.element.jsx';

const ImageCarousel = ({ styles }) => {
  const [current, setCurrent] = useState(0);
  const length = styles.length - 1;

  const preSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };

  let imageUrl = '';
  let thumbnailUrl = '';
  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }

  if (styles.length !== 0) {
    imageUrl = styles.map((item, index) => {
      const { url } = item.photos[0];
      return (
        index === current && (
          <Image key={index} src={url} alt="Women dress" />)
      );
    });

    thumbnailUrl = styles.map((item, index) => {
      // eslint-disable-next-line camelcase
      const { thumbnail_url } = item.photos[0];
      // eslint-disable-next-line react/no-array-index-key
      // eslint-disable-next-line camelcase
      return <img key={index} src={thumbnail_url} alt="Women dress" />;
    });
  }

  return (
    <Slider>
      <FullscreenArrow />
      <LeftArrow onClick={preSlide} />
      <RightArrow onClick={nextSlide} />
      {imageUrl}
      {/* {thumbnailUrl} */}
      <DownArrow />
    </Slider>

  );
};

export default ImageCarousel;

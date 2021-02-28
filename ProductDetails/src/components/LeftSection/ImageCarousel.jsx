/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

const ImageCarousel = ({ styles }) => {
  let imageUrl = '';
  let thumbnailUrl = '';
  if (styles.length !== 0) {
    imageUrl = styles.map((item, index) => {
      const { url } = item.photos[0];
      return <img key={index} src={url} alt="Women dress" />;
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
    <div className="carousel_slider">
      <div className="url">
        {imageUrl}
      </div>
      <div className="thumbnail">
        {thumbnailUrl}
      </div>
    </div>
  );
};

export default ImageCarousel;

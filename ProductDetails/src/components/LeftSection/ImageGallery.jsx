/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ImageCarousel from './ImageCarousel.jsx';

// eslint-disable-next-line react/prop-types
const ImageGallery = ({ getStyles }) => {
  const [styles, useStyles] = useState([]);

  useEffect(() => {
    // why /products/:${id}/styles doesn't work
    axios.get('/styles')
      .then((response) => {
        const { results } = response.data;
        useStyles(results);
        getStyles(results);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="image_gallery">
      <ImageCarousel styles={styles} />
    </div>
  );
};

export default ImageGallery;

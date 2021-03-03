import React from 'react';
import PropTypes from 'prop-types';

const DisplayPhotos = ({ photos }) => {
  const allPhotos = photos.map((photo) => <img src={photo} alt="tempPhoto" width="50px" height="50px" />);

  return (
    <>
      {allPhotos}
    </>
  );
};

export default DisplayPhotos;

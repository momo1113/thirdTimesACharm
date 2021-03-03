import React from 'react';

const Photos = ({ photos, answerId }) => (
  <div>
    {photos.map((photo, index) => (
      <img key={answerId + `-${index}`} src={photo} alt="" width="100" height="100" />
    ))}
  </div>
);

export default Photos;

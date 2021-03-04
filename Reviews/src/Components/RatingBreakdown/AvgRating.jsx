import React from 'react';
import PropTypes from 'prop-types';

const AvgRating = ({ ratings }) => {
  let reviewCount = 0;
  let reviewTotal = 0;

  Object.keys(ratings).forEach((key) => {
    reviewCount += Number(ratings[key]);
    reviewTotal += Number(key) * Number(ratings[key]);
  });

  const avgRating = (reviewTotal / reviewCount).toFixed(2);

  return (
    <div>
      {avgRating}
    </div>
  );
};

export default AvgRating;

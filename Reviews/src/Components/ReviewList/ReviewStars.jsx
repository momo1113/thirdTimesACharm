import React from 'react';
import PropTypes from 'prop-types';

const ReviewStars = ({ rating }) => {
  const filled = rating;
  const empty = 5 - filled;
  const displayedStars = [];
  for (let i = 0; i < filled; i += 1) {
    displayedStars.push(<span className="fa fa-star checked" />);
  }

  for (let i = 0; i < empty; i += 1) {
    displayedStars.push(<span className="fa fa-star" />);
  }

  return (
    <>
      {displayedStars}
    </>
  );
};

export default ReviewStars;

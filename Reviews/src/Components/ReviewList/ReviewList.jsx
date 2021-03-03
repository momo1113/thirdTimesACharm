import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = ({ reviews, reviewCount}) => {
  const allReviews = reviews;
  const useTheseReviews = allReviews.slice(0, reviewCount);
  return (
    <div>
      {useTheseReviews.map((review, index) => <ReviewListItem review={review} key={index} />)}
    </div>
  );
};

export default ReviewList;

import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = ({ reviews, reviewCount, markAsHelpful }) => {
  const allReviews = reviews;
  const useTheseReviews = allReviews.slice(0, reviewCount);
  return (
    <div>
      {useTheseReviews.map((review, index) => (
        <ReviewListItem
          markAsHelpful={markAsHelpful}
          review={review}
          key={index}
        />
      ))}
    </div>
  );
};

export default ReviewList;

import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = ({ reviews, reviewCount, seeMoreReviews }) => {
  const allReviews = reviews;
  const useTheseReviews = allReviews.slice(0, reviewCount);
  return (
    <div>
      <p>
        {allReviews.length} Reviews
      </p>
      {useTheseReviews.map((review, index) => <ReviewListItem review={review} key={index} />)}
      <button type="button" onClick={() => {seeMoreReviews()}}>More Reviews</button>
    </div>
  );
};

export default ReviewList;

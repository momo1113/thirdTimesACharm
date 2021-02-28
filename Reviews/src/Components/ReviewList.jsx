import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = (props) => (
  <div>
    {props.reviews.map((review, index) => <ReviewListItem review={review} key={index} />)}
  </div>
);

export default ReviewList;

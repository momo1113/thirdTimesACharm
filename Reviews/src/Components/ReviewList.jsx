import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = (props) => (
  <div>
    <p>{props.reviews.length} Reviews</p>
    {props.reviews.map((review, index) => <ReviewListItem review={review} key={index} />)}
  </div>
);

export default ReviewList;

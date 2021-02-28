import React from 'react';
import PropTypes from 'prop-types';

const ReviewTop = (props) => (
  <div>
    <div>
      {props.review.rating}
      stars
      {props.review.reviewer_name}, {props.review.date}
    </div>
  </div>
);

export default ReviewTop;

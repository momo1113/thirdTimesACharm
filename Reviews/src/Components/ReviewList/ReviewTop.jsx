import React from 'react';
import PropTypes from 'prop-types';

const ReviewTop = ({ review }) => (
  <div>
    {review.rating}
    stars
    {review.reviewer_name}, {review.date}
  </div>

);

// ReviewTop.propTypes = {
//   rating: PropTypes.number.isRequired,
//   reviewer_name: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };

export default ReviewTop;

// const ReviewBody = ({ summary, body }) => (
//   <div>
//     <p>
//       {summary}
//     </p>
//     <p>
//       {body}
//     </p>
//   </div>
// );

// ReviewBody.propTypes = {
//   summary: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
// };

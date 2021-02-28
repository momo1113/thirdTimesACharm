import React from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({ review }) => (
  <div>
    <p>
      Helpful? &nbsp;
      <a>Yes</a>
      &nbsp;
      (
      {review.helpfulness}
      )&nbsp;&nbsp;|
      &nbsp;&nbsp;
      <a>
        Report
      </a>
    </p>
  </div>
);

// ReviewHelpful.propTypes = {
//   helpfulness: PropTypes.number.isRequired,
// };

export default ReviewHelpful;

import React from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({ helpfulness }) => (
  <div>
    <p>
      Helpful? &nbsp;
      <a>Yes</a>
      &nbsp;
      (
      {helpfulness}
      )&nbsp;&nbsp;|
      &nbsp;&nbsp;
      <a>
        Report
      </a>
    </p>
  </div>
);

ReviewHelpful.propTypes = {
  helpfulness: PropTypes.string.isRequired,
};

export default ReviewHelpful;

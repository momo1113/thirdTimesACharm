import React from 'react';
import PropTypes from 'prop-types';

const ReviewBody = ({ review }) => (
  <div>
    <p>
      {review.summary}
    </p>
    <p>
      {review.body}
    </p>
  </div>
);

ReviewBody.propTypes = {
  summary: PropTypes.string,
  body: PropTypes.string,
};

ReviewBody.defaultProps = {
  summary: '',
  body: '',
};

export default ReviewBody;

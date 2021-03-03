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
  review: PropTypes.object,
  summary: PropTypes.string,
  body: PropTypes.string,
};

ReviewBody.defaultProps = {
  summary: '',
  body: '',
  review: {},
};

export default ReviewBody;

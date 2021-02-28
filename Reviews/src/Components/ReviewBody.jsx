import React from 'react';
import PropTypes from 'prop-types';

const ReviewBody = ({ summary, body }) => (
  <div>
    <p>
      {summary}
    </p>
    <p>
      {body}
    </p>
  </div>
);

ReviewBody.propTypes = {
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ReviewBody;

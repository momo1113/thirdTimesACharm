import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({ review,  markAsHelpful}) => {
  const [hClicked, setHClicked] = useState(false);

  return (
    <div>
      <p>
        Helpful? &nbsp;
        {!hClicked
          ? <span onClick={() => { markAsHelpful(review.review_id); setHClicked(true); }}>Yes</span>
          : <span>Yes</span>}
        &nbsp;
        (
        {review.helpfulness}
        )&nbsp;&nbsp;|
        &nbsp;&nbsp;
        <span>Report</span>
      </p>
  </div>
  )
};

// ReviewHelpful.propTypes = {
//   helpfulness: PropTypes.number.isRequired,
// };

export default ReviewHelpful;

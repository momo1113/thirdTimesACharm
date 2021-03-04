import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({ review,  markAsHelpful, reportReview}) => {
  const [hClicked, setHClicked] = useState(false);
  const [rClicked, setRClicked] = useState(false);

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
        <span onClick={() => { reportReview(review.review_id); setRClicked(true); }}>Report</span>
      </p>
    </div>
  );
};

// ReviewHelpful.propTypes = {
//   helpfulness: PropTypes.number.isRequired,
// };

export default ReviewHelpful;

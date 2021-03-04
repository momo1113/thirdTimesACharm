import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ReviewHelpful = ({ review,  markAsHelpful, reportReview}) => {
  const [hClicked, setHClicked] = useState(false);
  const [rClicked, setRClicked] = useState(false);
  let total = review.helpfulness;
  const increase = () => { total++ }
  return (
    <div>
      <p>
        Helpful? &nbsp;
        {!hClicked
          ? <span className="link" onClick={() => { markAsHelpful(review.review_id); setHClicked(true); increase();}}>Yes</span>
          : <span class="link" >Yes</span>}
        &nbsp;
        (
        {total}
        )&nbsp;&nbsp;|
        &nbsp;&nbsp;
        {!rClicked
        ? <span className="link" onClick={() => { reportReview(review.review_id); setRClicked(true); }}>Report</span>
        : <span class="link" >Report</span>}

      </p>
    </div>
  );
};

// ReviewHelpful.propTypes = {
//   helpfulness: PropTypes.number.isRequired,
// };

export default ReviewHelpful;

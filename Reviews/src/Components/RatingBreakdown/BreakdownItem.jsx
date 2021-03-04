import React from 'react';
import PropTypes from 'prop-types';

const BreakdownItem = ({pair, selectStars}) => (
  <div>
    <span className="link" onClick={()=> {selectStars(Number(pair[0]))}}>{pair[0]} Stars</span>: {pair[1]}
  </div>
);

export default BreakdownItem;

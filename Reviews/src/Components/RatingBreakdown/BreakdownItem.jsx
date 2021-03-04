import React from 'react';
import PropTypes from 'prop-types';

const BreakdownItem = ({pair, selectStars, addStar}) => (
  <div>
    <span className="link" onKeyPress={()=> {selectStars(Number(pair[0])); addStar(Number(pair[0]))}} onClick={()=> {selectStars(Number(pair[0])); addStar(Number(pair[0]))}} >
      {pair[0]}
      &nbsp;Stars
    </span>
    :
    &nbsp;
    {pair[1]}
  </div>
);

export default BreakdownItem;

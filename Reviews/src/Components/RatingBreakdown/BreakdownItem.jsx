import React from 'react';
import PropTypes from 'prop-types';

const BreakdownItem = ({pair}) => (
  <div>
    {pair[0]} Stars: {pair[1]}
  </div>
);

export default BreakdownItem;

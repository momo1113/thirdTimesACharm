import React from 'react';
import PropTypes from 'prop-types';

const FactorItem = ({ factor }) => {
  const name = Object.keys(factor)[0];
  const { value } = factor[name];
  const small = factor[name].edges[0];
  const large = factor[name].edges[1];

  return (
    <div>
      <p>{name}</p>
      <p>{value}</p>
      <span>{small}</span>
      &nbsp;
      <span>{large}</span>
    </div>
  );
};

export default FactorItem;

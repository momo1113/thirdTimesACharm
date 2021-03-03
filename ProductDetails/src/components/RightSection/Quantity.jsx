/* eslint-disable react/prop-types */
import React from 'react';

const Quantity = ({ value }) => {
  console.log(value);

  return (
    <option value={value}>
      {value}
    </option>
  );
};

export default Quantity;

/* eslint-disable react/prop-types */
import React from 'react';

const Quantity = ({ quantity, key }) => (

  <option value={key}>{quantity}</option>
);

export default Quantity;

/* eslint-disable react/prop-types */
import React from 'react';

const Quantity = ({ quantity, quantityValue }) => (

  quantityValue ? <option>{quantityValue}</option> : <option>{quantity}</option>

);

export default Quantity;

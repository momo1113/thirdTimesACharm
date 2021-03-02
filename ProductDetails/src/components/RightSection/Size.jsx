/* eslint-disable react/prop-types */
import React from 'react';

const Size = ({ size, key }) => (

  <option value={key + 1}>{size}</option>
);

export default Size;

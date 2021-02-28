/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Quantity from './Quantity.jsx';
import Size from './Size.jsx';

// eslint-disable-next-line react/prop-types
const Style = ({ style }) => {
  // eslint-disable-next-line react/prop-types
  const { skus } = style;

  // list of objects keys
  const quantitySize = Object.keys(skus);

  // eslint-disable-next-line max-len
  const quantity = quantitySize.map((item, index) =>
    // console.log(skus[item])
    <Quantity key={index} quantity={skus[item].quantity} />);

  const size = quantitySize.map((item, index) =>
    // console.log(skus[item])
    <Size key={index} size={skus[item].size} />);

  return (
    <div className="style">
      <div className="name">
        {style.name}
      </div>
      <p>below if all the quantity </p>
      <div className="quantity_size">
        {quantity}
        <p>below if all the size </p>
        {size}
      </div>
    </div>

  );
};

export default Style;

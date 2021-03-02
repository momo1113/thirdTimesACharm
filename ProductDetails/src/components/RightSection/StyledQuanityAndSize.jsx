/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import { QuantitySize } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const StyledQuanityAndSize = ({ style, selectedStyleName }) => {
  // eslint-disable-next-line react/prop-types
  const [sizeValue, setSizeValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');
  const { skus } = style;

  const listOfQuantityAndSize = Object.keys(skus);

  const quantity = listOfQuantityAndSize.map(
    (item, index) => style.name === selectedStyleName
            && (
            <Quantity key={index} quantity={skus[item].quantity} quantityValue={quantityValue} />
            ),
  );

  const size = listOfQuantityAndSize.map(
    (item, index) => style.name === selectedStyleName
            && <Size key={index} size={skus[item].size} />,
  );
  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in skus) {
      if (skus[key].size === sizeValue) {
        setQuantityValue(skus[key].quantity);
      }
    }
  }, [sizeValue]);
  return (
    <>
      {
                style.name === selectedStyleName && (
                <QuantitySize>
                  <select name="size" onChange={(e) => setSizeValue(e.target.value)} value={sizeValue}>
                    <option value="0">  SELECT SIZE</option>
                    {size}
                  </select>
                  <select name="quantity">
                    {quantity}
                  </select>
                </QuantitySize>
                )
            }
    </>
  );
};

export default StyledQuanityAndSize;

/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import { QuantitySize, SizeSelect, QuanitySelect } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const StyledQuanityAndSize = ({ style, selectedStyleName }) => {
  // eslint-disable-next-line react/prop-types
  const [sizeValue, setSizeValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  const { skus } = style;
  const listOfQuantityAndSize = Object.keys(skus);

  const quantity = listOfQuantityAndSize.map(
    // eslint-disable-next-line array-callback-return
    (item, index) => (
      (style.name === selectedStyleName && skus[item].quantity !== 0)
      && (
        <Quantity
          key={index}
          quantity={skus[item].quantity}
          quantityValue={quantityValue}
          skusId={item}

        />
      )
    ),
  );

  const size = listOfQuantityAndSize.map(
    (item, index) => (style.name === selectedStyleName) && skus[item].quantity !== 0
      && (
        <Size
          key={index}
          size={skus[item].size}
          skusid={item}

        />
      ),
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
            <SizeSelect name="size" onChange={(e) => setSizeValue(e.target.value)} value={sizeValue}>
              <option value="0">  SELECT SIZE</option>
              {size}
            </SizeSelect>
            <QuanitySelect name="quantity">
              {quantity}
            </QuanitySelect>
          </QuantitySize>
        )
      }
    </>
  );
};

export default StyledQuanityAndSize;

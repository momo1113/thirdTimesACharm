/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import { QuantitySize } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const StyledQuanityAndSize = ({ style, selectedStyleName }) => {
  // eslint-disable-next-line react/prop-types
  const { skus } = style;

  const listOfQuantityAndSize = Object.keys(skus);

  const quantity = listOfQuantityAndSize.map(
    (item, index) => style.name === selectedStyleName
            && (
            <Quantity key={index} quantity={skus[item].quantity} />
            ),
  );

  const size = listOfQuantityAndSize.map(
    (item, index) => style.name === selectedStyleName
            && <Size key={index} size={skus[item].size} />,
  );

  return (
    <QuantitySize>
      {
                style.name === selectedStyleName && (
                <div>
                  <select name="size">
                    <option value="0">  SELECT SIZE</option>

                    {size}

                  </select>
                  <select name="quantity">
                    {quantity}
                  </select>

                </div>
                )
            }
    </QuantitySize>
  );
};

export default StyledQuanityAndSize;

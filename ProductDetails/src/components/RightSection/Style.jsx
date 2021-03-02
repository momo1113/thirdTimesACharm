/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import { SelectedStyled } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const Style = ({ style, getSelectedStyle, selectedStyleName }) => {
  // eslint-disable-next-line react/prop-types
  const { skus } = style;

  // list of objects keys
  const quantitySize = Object.keys(skus);

  // eslint-disable-next-line max-len
  const quantity = quantitySize.map(
    (item, index) => style.name === selectedStyleName
      && (
        <Quantity key={index} quantity={skus[item].quantity} />
      ),
  );

  const size = quantitySize.map(
    (item, index) => style.name === selectedStyleName
      && <Size key={index} size={skus[item].size} />,
  );

  return (
    <>
      <SelectedStyled
        color={style.name}
        onClick={() => getSelectedStyle(style.name)}
        check={selectedStyleName === style.name}
      />

      {
        style.name === selectedStyleName && (
          <div>
            <select name="quantity">
              {quantity}
            </select>
            <select name="size">
              {size}
            </select>
          </div>
        )
      }
    </>

  );
};

export default Style;

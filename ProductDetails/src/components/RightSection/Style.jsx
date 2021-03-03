/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { SelectedStyled } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const Style = ({ style, getSelectedStyle, selectedStyleName }) => (
  <>
    <SelectedStyled
      color={style.name}
      onClick={() => getSelectedStyle(style.name)}
      check={selectedStyleName === style.name}
    />

  </>
);
export default Style;

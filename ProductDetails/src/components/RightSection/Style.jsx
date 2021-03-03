/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { SelectedStyled, CheckMark } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const Style = ({ style, getSelectedStyle, selectedStyleName }) => {
  const thumbnailUrl = style.photos[0].thumbnail_url;
  return (
    <>

      <SelectedStyled
        src={thumbnailUrl}
        onClick={() => getSelectedStyle(style.name)}
      />
      {
        selectedStyleName === style.name && <CheckMark />
      }
    </>
  );
};
export default Style;

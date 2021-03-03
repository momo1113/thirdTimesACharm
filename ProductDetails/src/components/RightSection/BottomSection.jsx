import React from 'react';
import Style from './Style.jsx';
import StyledQuanityAndSize from './StyledQuanityAndSize.jsx';
import { AddToBag, Bag, StarButton, AddPlus, FavStar } from '../../elements/RightSection/BottomSection.element.jsx';;

// eslint-disable-next-line react/prop-types
const BottomSection = ({ styles, getSelectedStyle, selectedStyleName }) => {
  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }

  const styledThumbnails = styles.map(
    (item, index) => (
      <Style
        key={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        selectedStyleName={selectedStyleName}
      />
    ),
  );

  const styledQuanityAndSize = styles.map(
    (item, index) => (
      <StyledQuanityAndSize
        key={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        selectedStyleName={selectedStyleName}
      />
    ),
  );

  return (
    <div className="styles_info">
      <h4>
        Style >
        <span style={{ fontWeight: 'normal', paddingLeft: 10 }}>
          {selectedStyleName}
        </span>
      </h4>
      <div className="style" style={{ display: 'flex', height: 50, flexWrap: 'wrap' }}>
        {styledThumbnails}
      </div>

      { styledQuanityAndSize}
      <AddToBag >
        <Bag> ADD TO BAG<AddPlus /></Bag>
        <StarButton> <FavStar /></StarButton>
      </AddToBag >
    </div >
  );
};

export default BottomSection;

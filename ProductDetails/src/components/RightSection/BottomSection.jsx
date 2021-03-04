import React, { useState } from 'react';
import Style from './Style.jsx';
import StyledQuanityAndSize from './StyledQuanityAndSize.jsx';
import { AddToBag, Bag, StarButton, AddPlus, FavStar } from '../../elements/RightSection/BottomSection.element.jsx';;

// eslint-disable-next-line react/prop-types
const BottomSection = ({ styles, getSelectedStyle, selectedStyleId }) => {

  const [clicked, setClicked] = useState(false);
  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }
  const getClicked = (clicked) => {
    setClicked(!clicked);
  }
  const styledThumbnails = styles.map(
    (item, index) => (
      <Style
        key={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        getClicked={getClicked}
        selectedStyleId={selectedStyleId}

      />
    ),
  );

  const styledQuanityAndSize = styles.map(
    (item, index) => (
      <StyledQuanityAndSize
        key={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        selectedStyleId={selectedStyleId}
        clicked={clicked}
      />
    ),
  );
  const selectedStyleName = styles.filter(item => item.style_id === selectedStyleId)
  console.log(selectedStyleName)
  return (
    <>
      <h4>
        Style >
        <span style={{ fontWeight: 'normal', paddingLeft: 10 }}>
          {selectedStyleName.length !== 0 && selectedStyleName[0].name}
        </span>
      </h4>
      <div className="style" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {styledThumbnails}
      </div>
      <div>
        {styledQuanityAndSize}

        <AddToBag  >
          <Bag onClick={() => setClicked(true)}> ADD TO BAG<AddPlus /></Bag>
          <StarButton > <FavStar /></StarButton>
        </AddToBag >
      </div>
    </ >
  );
};

export default BottomSection;

import React, { useState } from 'react';
import StyleThumbnails from './StyleThumbnails.jsx';
import QuanityAndSize from './QuanityAndSize.jsx';
import {
  AddToBag, Bag, StarButton, AddPlus, FavStar, StyleValue, StyleLegend,
} from '../../elements/RightSection/BottomSection.element.jsx';

// eslint-disable-next-line react/prop-types
const BottomSection = ({ styles, getSelectedStyle, selectedStyleId, getSizeQuanitySelected }) => {
  const [clicked, setClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);

  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }
  const getClicked = (click) => {
    setClicked(!click);
  };

  const getLikeClicked = (click) => {
    setLikeClicked(!click);
  }
  const styledThumbnails = styles.map(
    (item, index) => (
      <StyleThumbnails
        key={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        getClicked={getClicked}
        selectedStyleId={selectedStyleId}
        getLikeClicked={getLikeClicked}
      />
    ),
  );
  const styledQuanityAndSize = styles.map(
    (item, index) => (
      <QuanityAndSize
        key={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        selectedStyleId={selectedStyleId}
        clicked={clicked}
      />
    ),
  );

  const selectedStyleName = styles.filter((item) => item.style_id === selectedStyleId);
  return (
    <>
      <StyleLegend>
        style:
        {
          selectedStyleName.length !== 0 && (
            <StyleValue color={selectedStyleName[0].name}>
              {selectedStyleName[0].name.toUpperCase()}
            </StyleValue>
          )
        }
      </StyleLegend>
      <div className="style" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {styledThumbnails}
      </div>
      <div>
        {styledQuanityAndSize}
        <AddToBag>
          <Bag onClick={() => setClicked(true)}>
            ADD TO BAG
          </Bag>
          <StarButton onClick={() => setLikeClicked(!likeClicked)}>
            <FavStar likeClicked={likeClicked} />
          </StarButton>
        </AddToBag>
      </div>
    </ >
  );
};

export default BottomSection;

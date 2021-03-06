import React, { useState, useEffect } from 'react';
import StyleThumbnails from '../src/components/RightSection/StyleThumbnails.jsx';
import QuanityAndSize from '../src/components/RightSection/QuanityAndSize.jsx';
import {
  AddToBag, Bag, StarButton, FavStar, StyleValue, StyleLegend,
} from '../src/elements/RightSection/BottomSection.element.jsx';

// eslint-disable-next-line react/prop-types
const BottomSection = ({
  styles, getSelectedStyle, selectedStyleId, getQuantitySizeSelected,
}) => {
  const [clicked, setClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [sizeQuantitySelcted, setSizeQuantitySelcted] = useState(false);

  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }
  const getClicked = (click) => {
    setClicked(!click);
  };

  const getLikeClicked = (click) => {
    setLikeClicked(!click);
  };

  const getSizeQuantitySelected = (selected) => {
    console.log(selected)
    setSizeQuantitySelcted(selected);
  };
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
        getSizeQuantitySelected={getSizeQuantitySelected}
      />
    ),
  );

  const selectedStyleName = styles.filter((item) => item.style_id === selectedStyleId);


  const handleBagAdd = () => {
    if (!clicked) {
      setClicked(true);
    }
  };

  if (clicked && sizeQuantitySelcted) {
    getQuantitySizeSelected(1);
    setClicked(false);
  }

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
          <Bag onClick={handleBagAdd}>
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

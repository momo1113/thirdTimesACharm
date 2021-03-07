/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StyleThumbnails from './StyleThumbnails.jsx';
import QuanityAndSize from './QuanityAndSize.jsx';
import {
  AddToBag, Bag, StarButton, FavStar, StyleValue, StyleLegend,
} from '../../elements/RightSection/BottomSection.element.jsx';

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
        getLikeClicked={getLikeClicked}
        getClicked={getClicked}
      />
    ),
  );

  const selectedStyleName = styles.filter((item) => item.style_id === selectedStyleId);


  const handleBagAdd = () => {
 
      setClicked(true);
    
  };

  if (clicked && sizeQuantitySelcted) {
    getQuantitySizeSelected(1);
    setClicked(false);
  }

  console.log(clicked)
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

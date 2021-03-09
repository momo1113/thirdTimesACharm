/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StyleThumbnails from './StyleThumbnails.jsx';
import QuanityAndSize from './QuanityAndSize.jsx';
import {
  AddToBag, Bag, StarButton, FavStar, StyleValue, StyleLegend, ErrorMessage,
} from '../../elements/RightSection/BottomSection.element.jsx';

// eslint-disable-next-line react/prop-types
const BottomSection = ({
  styles, getSelectedStyle, selectedStyleId, getQuantitySizeSelected,
  getMainCurrent,
}) => {
  const [bagClicked, setBagClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [sizeQuantitySelected, setSizeQuantitySelected] = useState(0);
  const [errorMesShowed, setErrorMesShowed] = useState(false);

  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }

  const styledThumbnails = styles.map(
    (item, index) => (
      <StyleThumbnails
        key={item.style_id}
        index={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        setBagClicked={setBagClicked}
        selectedStyleId={selectedStyleId}
        getMainCurrent={getMainCurrent}
        setLikeClicked={setLikeClicked}
        setErrorMesShowed={setErrorMesShowed}
        setSizeQuantitySelected={setSizeQuantitySelected}
      />
    ),
  );
  const styledQuanityAndSize = styles.map(
    (item) => (
      <QuanityAndSize
        key={item.style_id}
        style={item}
        getSelectedStyle={getSelectedStyle}
        selectedStyleId={selectedStyleId}
        bagClicked={bagClicked}
        setSizeQuantitySelected={setSizeQuantitySelected}
        setErrorMesShowed={setErrorMesShowed}
      />
    ),
  );

  const selectedStyleName = styles.filter((item) => item.style_id === selectedStyleId);

  const handleBagAdd = () => {
    setBagClicked(!bagClicked);
    getQuantitySizeSelected(sizeQuantitySelected);
  };

  // if (bagClicked && sizeQuantitySelected !== 0) {
  //   setBagClicked(false);

  //   console.log('quantitySize ' + sizeQuantitySelected)
  //   //getQuantitySizeSelected(sizeQuantitySelected);
  // }
  const handleClickLike = () => {
    setLikeClicked(!likeClicked);
    if (likeClicked && sizeQuantitySelected === 0) {
      setErrorMesShowed(true);
    }
  };

  // let index = 0;
  // console.log('likeClicked ' + bagClicked)
  // console.log(`${index++} ${sizeQuantitySelected}`);
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
          <StarButton
            onClick={handleClickLike}
            sizeQuantitySelected={sizeQuantitySelected !== 0}
            disabled={errorMesShowed}
          >
            <FavStar
              likeClicked={likeClicked}
              sizeQuantitySelected={sizeQuantitySelected !== 0}
            />
          </StarButton>
          {
            ((sizeQuantitySelected === 0 && likeClicked) || errorMesShowed)
            && (
              <ErrorMessage>
                Please select your Size to add this item to your wish list.
              </ErrorMessage>
            )
          }
        </AddToBag>
      </div>
    </ >
  );
};

export default BottomSection;

import React from 'react';
import StyleName from './StyleName.jsx'
import StyleSizeQuantity from './StyleSizeQuantity.jsx';

// eslint-disable-next-line react/prop-types
const BottomSection = ({ styles }) => {
  console.log(styles)

  let styleNames = "";
  let styleSizeQuantity = [];
  if (styles.length !== 0) {
    styleNames = styles.map((item, key) => {
      return <StyleName key={key} styleName={item.name} />
    })

    styleSizeQuantity = styles.map((item, key) => {
      return <StyleSizeQuantity key={key} styleSizeQuantity={item.skus} />
    })
  }


  return (
    <div className="styles_info">
      <div className="selected_styles">
        <p> STYLE > </p>
        <span> SELECTED STYLE</span>
      </div>
      {styleNames}
      {styleSizeQuantity}
    </div>
  );
};

export default BottomSection;

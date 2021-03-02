import React from 'react';
import Style from './Style.jsx'


// eslint-disable-next-line react/prop-types
const BottomSection = ({ styles }) => {

  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }
  const style = styles.map((item, index) => {
    return <Style key={index} style={item} />
  })

  return (
    <div className="styles_info">
      <div className="selected_styles">
        <p> STYLE > </p>
        <span> SELECTED STYLE</span>
      </div>
      <div className="style">
        {style}
      </div>
      <div className="add_to_bag">
        <p> ADD TO BAG</p>
        <span> star </span>
      </div>
    </div>
  );
};

export default BottomSection;

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
        <h4> STYLE ><span style={{ fontWeight: 'normal' }}> SELECTED STYLE</span> </h4>

      </div>
      <div className="style" style={{ display: 'flex' }}>
        {style}
      </div>
      <div className="add_to_bag">
        <p> ADD TO BAG</p>
        <span> star </span>
      </div>
    </div >
  );
};

export default BottomSection;

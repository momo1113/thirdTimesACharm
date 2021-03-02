import React from 'react';
import PropTypes from 'prop-types';



const CharItem = (props) => {
  console.log(props)
  return (
    <>
      {props.name}
    </>
  );
};

export default CharItem;

// <label for="val">Label</label>
// <input type="radio" id="val" name="val" value="hello"></input>
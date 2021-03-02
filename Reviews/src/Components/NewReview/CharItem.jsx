import React from 'react';
import PropTypes from 'prop-types';



class CharItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const charId = this.props.charId
    let charArr = [charId, event.target.value];
    this.props.updateCharacteristics(charArr);
  }

  render() {
    return (
      <>
        {this.props.name}
        <div onChange={this.onChangeValue}>
        <label >{this.props.options[1]}</label>
          <input type="radio" value="1" name={this.props.name} />
          <label >{this.props.options[2]}</label>
          <input type="radio" value="2" name={this.props.name} />
          <label >{this.props.options[3]}</label>
          <input type="radio" value="3" name={this.props.name} />
          <label >{this.props.options[4]}</label>
          <input type="radio" value="4" name={this.props.name} />
          <label >{this.props.options[5]}</label>
          <input type="radio" value="5" name={this.props.name} />
        </div>
      </>
    );
  }
};

export default CharItem;

// <label for="val">Label</label>
// <input type="radio" id="val" name="val" value="hello"></input>

  // return (
  //   <div>
  //     {props.name}
  //     {Object.keys(props.options).map((num, index) =>
  //       <>
  //       <label key={index} for="${num}" >{props.options[num]}</label>
  //       <input type="radio" id="${num}" value="${props.options[num]}" ></input>
  //       </>)}
  //   </div>
  // );
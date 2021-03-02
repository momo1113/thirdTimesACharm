import React from 'react';
import PropTypes from 'prop-types';
import CharItem from './CharItem.jsx'

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeValue = this.onChangeValue.bind(this);

// 0: (2) ["Fit", 50013]
// 1: (2) ["Length", 50014]
// 2: (2) ["Comfort", 50015]
// 3: (2) ["Quality", 50016]
    const chars = {
      Fit: {
        choices: {
          1: 'Runs tight',
          2: 'Runs slightly tight',
          3: 'Perfect',
          4: 'Runs slightly long',
          5: 'Runs long',
        },
      },
      Length: {
        choices: {
          1: 'Runs Short',
          2: 'Runs slightly short',
          3: 'Perfect',
          4: 'Runs slightly long',
          5: 'Runs long',
        },
      },
      Comfort: {
        choices: {
          1: 'Uncomfortable',
          2: 'Slightly uncomfortable',
          3: 'Ok',
          4: 'Comfortable',
          5: 'Perfect',
        },
      },
      Quality: {
        choices: {
          1: 'Poor',
          2: 'Below average',
          3: 'What I expected',
          4: 'Pretty great',
          5: 'Perfect',
        },
      },
      Size: {
        choices: {
          1: 'A size too small',
          2: '½ a size too small',
          3: 'Perfect',
          4: '½ a size too big',
          5: 'A size too wide',
        },
      },
      Width: {
        choices: {
          1: 'Too narrow',
          2: 'Slightly narrow',
          3: 'Perfect',
          4: 'Slightly wide',
          5: 'Too wide',
        },
      },
    };
  }

  onChangeValue(event) {
    var charObj = { characteristics: this.state }
    this.props.updateState(charObj);
  }

  render() {
    return (
      <>
        Characteristics
        <br/>
        {this.props.factors.map((factor, index) => <CharItem name={factor[0]} key={factor[1]} />)}

        {/* <div onChange={this.onChangeValue}>
          <input type="radio" value="1" name="rating" />
          <input type="radio" value="2" name="rating" />
          <input type="radio" value="3" name="rating" />
          <input type="radio" value="4" name="rating" />
          <input type="radio" value="5" name="rating" />
        </div> */}
      </>
    );
  }
}

export default Characteristics;

// 0: (2) ["Fit", 50013]
// 1: (2) ["Length", 50014]
// 2: (2) ["Comfort", 50015]
// 3: (2) ["Quality", 50016]

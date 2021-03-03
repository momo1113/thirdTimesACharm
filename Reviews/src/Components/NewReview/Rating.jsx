import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    var ratingObj = { rating: Number(event.target.value) }
    this.props.updateState(ratingObj);
  }

  render() {
    return (
      <>
        Overall Rating
        <div onChange={this.onChangeValue}>
          <input type="radio" value="1" name="rating" />
          <input type="radio" value="2" name="rating" />
          <input type="radio" value="3" name="rating" />
          <input type="radio" value="4" name="rating" />
          <input type="radio" value="5" name="rating" />
        </div>
      </>
    );
  }
}

export default Rating;

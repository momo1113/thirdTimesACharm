import React from 'react';
import PropTypes from 'prop-types';

class Recomend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Recomend: null,
    };
  }

  render() {
    return (
      <>
        Overall Recomend
        <p>⭐⭐⭐⭐⭐</p>
      </>
    );
  }
}

export default Recomend;

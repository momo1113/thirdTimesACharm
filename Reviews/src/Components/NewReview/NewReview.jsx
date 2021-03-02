import React from 'react';
import PropTypes from 'prop-types';
import css from './NewReview.css';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          hello!
          <button onClick={() => {this.props.close()}} type="button">
            Close
          </button>
        </section>
      </div>
    );
  }
}

export default NewReview;

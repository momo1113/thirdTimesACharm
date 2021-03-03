import React from 'react';
import PropTypes from 'prop-types';

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ body: event.target.value });
    this.props.updateState({ body: event.target.value });
  }

  handleSubmit(event) {
    this.props.updateState(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Review:
          <textarea defaultValue="Why did you like the product or not?" maxLength="1000" minLength="50" value={this.state.value} onChange={this.handleChange} />
          {this.state.body.length < 50
            ? (
              <p>
                Minimum required characters left:&nbsp;
                {50 - this.state.body.length}
              </p>
            )
            : <p>Minimum Reached</p>}
        </label>
      </form>
    );
  }
}

export default ReviewBody;

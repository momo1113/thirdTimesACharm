import React from 'react';
import PropTypes from 'prop-types';

class SortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.getSort(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.reviewCount}
          &nbsp;Reviews, sorted by&nbsp;
          <select value={this.state.value} onChange={this.handleChange}>
          <option value="relevant">Relevence</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>

          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SortForm;

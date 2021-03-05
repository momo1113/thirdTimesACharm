import React from 'react';
import PropTypes from 'prop-types';

class SortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.getSort(event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="sortBox">
        <span>
        {this.props.reviewCount}
      &nbsp;Reviews, sorted by&nbsp;
        </span>
<span>
<form onSubmit={this.handleSubmit}>


            <select onChange={this.handleSubmit}>
              <option value="relevant">Relevence</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>

            </select>

          {/* <input type="submit" value="Submit" /> */}
        </form>
</span>

      </div>
    );
  }
}

export default SortForm;

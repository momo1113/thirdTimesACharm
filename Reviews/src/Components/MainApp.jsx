import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      reviews: []
    };
  }

  componentDidMount() {
    var prod = this.state.productId
    axios({
      method: 'get',
      url: '/reviews',
      params: { id: 14931 },
    })
      .then((data) => {
        this.setState({
          reviews: data.data.results,
        });
      });
  }

  render() {
    const { reviews } = this.state.reviews
    return (
      <ReviewList reviews={this.state.reviews} />
      // <div>hi</div>
    );
  }
}

export default MainApp;

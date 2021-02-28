import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      reviews: [],
      reviewCount: 2,
    };

    this.seeMoreReviews = this.seeMoreReviews.bind(this)
  }

  componentDidMount() {
    const prodId = this.state.productId
    axios({
      method: 'get',
      url: '/reviews',
      params: { id: prodId },
    })
      .then((data) => {
        this.setState({
          reviews: data.data.results,
        });
      });
  }

  seeMoreReviews() {
    const newCount = this.state.reviewCount + 2;
    this.setState({
      reviewCount: newCount,
    });
  }

  render() {
    const reviews = this.state.reviews
    const reviewCount = this.state.reviewCount
    return (
      <ReviewList
        seeMoreReviews={this.seeMoreReviews}
        reviewCount={reviewCount}
        reviews={reviews}
      />
      // <div>hi</div>
    );
  }
}

export default MainApp;

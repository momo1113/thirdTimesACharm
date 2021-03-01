import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import SortForm from './ReviewList/SortForm.jsx';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      reviews: [],
      reviewCount: 2,
      ratings: {},
      loaded: false,
      displayedReviews: [],
    };

    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.getSort = this.getSort.bind(this);
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
          displayedReviews: data.data.results,
        });
      });
    axios({
      method: 'get',
      url: '/meta',
      params: { id: prodId },
    })
      .then((data) => {
        this.setState({
          ratings: data.data,
          loaded: true,
        });
      });
  }

  getSort(val) {
    if (val === 'helpful') {
      this.sortReviews('help');
    }
    if (val === 'newest') {
      this.sortReviews('date');
    }
  }

  sortReviews(sort) {
    const sortedRevs = [];
    const currRevs = this.state.reviews;

    for (let i = 0; i < currRevs.length; i += 1) {
      const review = currRevs[i];
      if (!sortedRevs.length) {
        sortedRevs.push(review);
      } else {
        let entered = false;
        for (let j = 0; j < sortedRevs.length; j += 1) {
          const sortedRev = sortedRevs[j];
          if (sort === 'help') {
            if (review.helpfulness > sortedRev.helpfulness && !entered) {
              sortedRevs.splice(j, 0, review);
              entered = true;
            }
          } else if (sort === 'date') {
            if (review.date < sortedRev.date && !entered) {
              sortedRevs.splice(j, 0, review);
              entered = true;
            }
          }
        }
        if (!entered) {
          sortedRevs.push(review);
        }
      }
    }
    this.setState({
      displayedReviews: sortedRevs,
    });
  }

  seeMoreReviews() {
    const newCount = this.state.reviewCount + 2;
    this.setState({
      reviewCount: newCount,
    });
  }

  render() {
    if (this.state.loaded) {
      const allReviews = this.state.reviews
      const reviews = this.state.displayedReviews
      const reviewCount = this.state.reviewCount
      return (
        <div>
          <SortForm reviewCount={allReviews.length} getSort={this.getSort}/>
          <ReviewList
            seeMoreReviews={this.seeMoreReviews}
            reviewCount={reviewCount}
            reviews={reviews}
          />
          <RatingBreakdown ratings={this.state.ratings} />
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default ReviewApp;

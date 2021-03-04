import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import SortForm from './ReviewList/SortForm.jsx';
import NewReview from './NewReview/NewReview.jsx';

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
      newReview: false,
    };

    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.getSort = this.getSort.bind(this);
    this.showModal = this.showModal.bind(this);
    this.sendNewReview = this.sendNewReview.bind(this);
    this.markAsHelpful = this.markAsHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);
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
        this.getSort('relevant');
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
    if (val === 'relevant') {
      this.sortReviews('relevant');
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
            if (review.date > sortedRev.date && !entered) {
              sortedRevs.splice(j, 0, review);
              entered = true;
            }
          } else if (sort === 'relevant') {
            const reviewDate = new Date(review.date);
            const sortedRevDate = new Date(sortedRev.date);
            const today = new Date();
            const reviewDif = today - reviewDate;
            const sortedDif = today - sortedRevDate;
            const reviewRel = reviewDif / review.helpfulness;
            const sortedRel = sortedDif / sortedRev.helpfulness;
            if (reviewRel < sortedRel && !entered) {
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

  showModal() {
    this.setState({
      newReview: !this.state.newReview
    });
  };

  seeMoreReviews() {
    const newCount = this.state.reviewCount + 2;
    this.setState({
      reviewCount: newCount,
    });
  }

  sendNewReview(obj) {
    const newObj = obj;
    newObj.product_id = this.state.productId;
    axios.post('/newReview', newObj)
      .then(response => {
        console.log(response);
      });
  }

  markAsHelpful(revId) {
    // console.log(revId)
    axios.put('/helpful', {id: revId})
  }

  reportReview(revId) {
    axios.put('/report', {id: revId})
  }

  render() {
    console.log(this.state)
    if (this.state.loaded) {
      const allReviews = this.state.reviews
      const reviews = this.state.displayedReviews
      const reviewCount = this.state.reviewCount
      const factors = Object.keys(this.state.ratings.characteristics).map((key) => (
        [key, this.state.ratings.characteristics[key].id]
      ));
      return (
        <div>
          <SortForm reviewCount={allReviews.length} getSort={this.getSort} />
          <ReviewList
            seeMoreReviews={this.seeMoreReviews}
            reviewCount={reviewCount}
            reviews={reviews}
            markAsHelpful={this.markAsHelpful}
            reportReview={this.reportReview}
          />
          {allReviews.length > reviewCount
            ? (
              <>
                <button type="button" onClick={this.seeMoreReviews}>More Reviews</button>
                <button
                  type="button"
                  onClick={() => { this.showModal(); }}
                >
                  Add Review
                </button>
              </>
            )
            : (
              <button
                type="button"
                onClick={() => { this.showModal(); }}
              >
                Add Review
              </button>
            )}
          <NewReview
            factors={factors}
            close={this.showModal}
            show={this.state.newReview}
            sendNewReview={this.sendNewReview}
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

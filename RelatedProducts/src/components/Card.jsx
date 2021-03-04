import React from 'react';
import axios from 'axios';
import Rating from 'react-star-ratings';
import getRating from '../utility/getRating.js'
import '../../public/css/css.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'Product name',
      imgs: ['./img/img-test.png'],
      rating: 0,
      // price: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios.get(`/products/${id}/styles`)
      .then((res) => {
        const imgs = res.data.results[0].photos[0].thumbnail_url;
        if (imgs) {
          this.setState({
            imgs: res.data.results[0].photos,
          });
        }
      });
    getRating(id, (average) => {
      this.setState({ rating: average || 0 });
    });
  }

  handleClick(e) {
    const { id } = this.props;
    e.preventDefault();
    this.props.handleClick(id);
  }

  render() {
    const imgSrc = this.state.imgs[0].thumbnail_url || this.state.imgs[0];
    const { name, category, default_price } = this.props.currentProduct;
    const { rating } = this.state;
    return (
      <div className="card">
        <div className="frame">
          <img src={imgSrc} alt="product image" />
        </div>
        {this.props.list === 'outfitList' ? <div className="action" onClick={this.handleClick}>Remove</div> : <div className="action" onClick={this.handleClick}>Compare</div>}
        <div className="category">{category}</div>
        <div className="product-name">{name}</div>
        <div className="price">
          $
          {default_price}
        </div>
        <div className="rating">
          <Rating
            rating={rating}
            starRatedColor="RGB(253, 204, 13)"
            starDimension="20px"
            starSpacing="1px"
          />
        </div>
      </div>
    );
  }
}

export default Card;

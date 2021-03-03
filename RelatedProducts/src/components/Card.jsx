import React from 'react';
import axios from 'axios';
import '../../public/css/css.js'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Product name',
      imgs: ['./img/img-test.png'],
      category: 'category',
      price: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios.get(`/products/${id}`)
      .then((res) => {
        const { category, name } = res.data;
        this.setState({
          category,
          name,
          price: res.data.default_price,
        });
      });
    axios.get(`/products/${id}/styles`)
      .then((res) => {
        const imgs = res.data.results[0].photos[0].thumbnail_url;
        if (imgs) {
          this.setState({
            imgs: res.data.results[0].photos,
          });
        }
      });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.id);
  }

  render() {
    const imgSrc = this.state.imgs[0].thumbnail_url || this.state.imgs[0];
    return (
      <div className="card">
        <button onClick={this.handleClick}>Remove</button>
        <img src={imgSrc} alt="./img/img-test.png"></img>
        <div className="category">{this.state.category}</div>
        <div className="product-name">{this.state.name}</div>
        <div className="price">$ {this.state.price}</div>
        <div>rating: 3</div>
      </div>
    );
  }
}

export default Card;

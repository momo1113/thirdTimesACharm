import React from 'react';
import axios from 'axios';
import '../../public/css/css.js'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Product name',
      img: './img/img-test.png',
      category: 'category',
      price: 0,
    };
  }

  componentDidMount() {
    axios.get(`/products/${this.props.id}`)
      .then((res) => {
        this.setState({
          category: res.data.category,
          name: res.data.name,
          price: res.data.default,
        })
      })
  }

  render() {
    return (
      <div className="card">
        <img src={this.state.img}></img>
        <div>{this.state.name}</div>
        <div>{this.state.category}</div>
        <div>{this.state.price}</div>
      </div>
    )
  }
}

export default Card;

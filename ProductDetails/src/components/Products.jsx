/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ImageGallery from './ImageGallery.jsx';
// eslint-disable-next-line import/extensions
import ProductDetails from './ProductDetails.jsx';
// eslint-disable-next-line import/extensions
import ProductInfo from './ProductInfo.jsx';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const id = 14807;
    axios.get(`/products/${id}`)
      .then((response) => {
        const { data } = response;
        // eslint-disable-next-line object-curly-newline
        // eslint-disable-next-line camelcase
        // eslint-disable-next-line object-curly-newline
        // eslint-disable-next-line camelcase
        const { category, default_price, description, features, name, slogan } = data;
        // eslint-disable-next-line object-curly-newline
        this.setState({ product: { category, default_price, description, features, name, slogan } })
      })
      .catch((err) => console.log(err));
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.product);
    return (
      <div className="product_overview">
        <p> SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT OFFER-NEW PRODUCT-HIGHLIGHT</p>
        <div className="product_detail">
          <ImageGallery />
          <ProductDetails />
        </div>
        <div className="product_info">
          <ProductInfo product={this.state.product} />
        </div>
      </div>
    );
  }
}

export default Products;

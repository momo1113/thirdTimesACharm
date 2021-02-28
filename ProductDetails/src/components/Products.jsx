/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ImageGallery from './LeftSection/ImageGallery.jsx';
// eslint-disable-next-line import/extensions
import ProductDetails from './RightSection/ProductDetails.jsx';
// eslint-disable-next-line import/extensions
import ProductInfo from './ProductInfo.jsx';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      styles: [],
    };
    this.getStyles = this.getStyles.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  getStyles(styles) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ styles });
  }

  componentDidMount() {
    const id = 14807;
    axios.get(`/products/${id}`)
      .then((response) => {
        const { data } = response;
        const {
          category, default_price, description, features, name, slogan,
        } = data;
        // eslint-disable-next-line object-curly-newline
        // eslint-disable-next-line max-len
        this.setState({ product: { category, default_price, description, features, name, slogan } });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="product_overview">
        <p> SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT OFFER-NEW PRODUCT-HIGHLIGHT</p>
        <div className="product_detail">
          <ImageGallery getStyles={this.getStyles} />
          <ProductDetails product={this.state.product} styles={this.state.styles} />
        </div>
        <br />
        <div className="product_info">
          <ProductInfo product={this.state.product} />
        </div>
      </div>
    );
  }
}

export default Products;

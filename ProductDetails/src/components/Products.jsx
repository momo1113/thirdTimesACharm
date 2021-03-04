/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ImageGallery from './LeftSection/ImageGallery.jsx';

import ProductDetails from './RightSection/ProductDetails.jsx';

import ProductInfo from './BottomSection/ProductInfo.jsx';
import {
  Wrapper, Header, Image, Detail, Info,
} from '../elements/Products.element.jsx';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      styles: [],
      selectedStyleId: 75540,
    };
    this.getStyles = this.getStyles.bind(this);
    this.getSelectedStyle = this.getSelectedStyle.bind(this);
  }

  componentDidMount() {
    const id = 14932;
    axios.get(`/products/${id}`)
      .then((response) => {
        const { data } = response;
        const {
          category, default_price, description, features, name, slogan,
        } = data;
        this.setState({
          product: {
            category, default_price, description, features, name, slogan,
          },
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  getStyles(styles) {
    this.setState({ styles });
  }

  getSelectedStyle(styleId) {
    this.setState({ selectedStyleId: styleId });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <p> SITE-WIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT OFFER-NEW PRODUCT-HIGHLIGHT</p>
        </Header>
        <Image>
          <ImageGallery getStyles={this.getStyles} />
        </Image>
        <Detail>
          <ProductDetails product={this.state.product} styles={this.state.styles} getSelectedStyle={this.getSelectedStyle} selectedStyleId={this.state.selectedStyleId} />
        </Detail>
        <Info>
          <ProductInfo product={this.state.product} />
        </Info>
      </Wrapper>
    );
  }
}

export default Products;

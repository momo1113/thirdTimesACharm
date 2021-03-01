/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import ImageGallery from './LeftSection/ImageGallery.jsx';

import ProductDetails from './RightSection/ProductDetails.jsx';

import ProductInfo from './BottomSection/ProductInfo.jsx';

const Wrapper = styled.div`
display:grid;
grid-template-columns:60% auto;
grid-template-rows: 60px auto 90px;
grid-template-areas: "hd hd"
                      "image detail"
                      "info info"
`;

const Header = styled.div`
grid-area:hd;
`;

const Image = styled.div`
grid-area:image;
`;

const Detail = styled.div`
grid-area:detail;
`;

const Info = styled.div`
grid-area:info;
`;

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      styles: [],
    };
    this.getStyles = this.getStyles.bind(this);
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
      .catch((err) => console.log(err));
  }

  getStyles(styles) {
    this.setState({ styles });
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
          <ProductDetails product={this.state.product} styles={this.state.styles} />
        </Detail>
        <Info>
          <ProductInfo product={this.state.product} />
        </Info>
      </Wrapper>
    );
  }
}

export default Products;

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import {
  Reviews, Category, Name, Price,
} from '../../elements/RightSection/TopSection.element.jsx';

// eslint-disable-next-line react/prop-types
const TopSection = ({ product, styles, selectedStyleName }) => {
  console.log(styles);

  const [rating, setRating] = useState(0);
  const [salePrice, setSalePrice] = useState(0);




  useEffect(() => {
    const id = 14932;
    axios.get(`/reviews/${id}`)
      .then((response) => {
        const rate = response.data;
        setRating(rate);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    styles.map((style) => {
      console.log('style.name')((style.name === selectedStyleName) && style.sale_price) ? setSalePrice(style.sale_price) : null;
    });
  }, [salePrice]);

  console.log('1');
  return (
    <div className="top_section">
      {
        Number(rating) > 0 && (
          <Reviews>
            <StarRatings
              rating={Number(rating)}
              starRatedColor="RGB(253, 204, 13)"
              numberOfStars={5}
              starDimension={18}
              starSpacing={1}
              name="rating"
            />
          </Reviews>
        )
      }

      <Category>{product.category}</Category>
      <Name>{product.name}</Name>
      <Price>
        $
        {product.default_price}
      </Price>
    </div>
  );
};

export default TopSection;

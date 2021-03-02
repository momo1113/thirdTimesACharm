/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const Reviews = styled.div`
  margin-right:1%;
  &::after{
    content:"Read all reviews";
    padding:5px;
    text-decoration:underline;
    font-size:14px;

  }
`;

// eslint-disable-next-line react/prop-types
const TopSection = ({ product, styles }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const id = 14932;
    axios.get(`/reviews/${id}`)
      .then((response) => {
        const rate = response.data;
        setRating(rate);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="top_section">
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
      <div className="category">
        {product.category}
        <p>{product.name}</p>
      </div>
      <div className="price">
        <p>{product.default_price}</p>
        {
          product.sale_price !== null ? <p>{product.sale_price}</p> : null
        }
      </div>
    </div>
  );
};

export default TopSection;

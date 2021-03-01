/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowsFullscreen } from '@styled-icons/bootstrap'

const Slider = styled.div`
  position:relative;
  display:flex;
  height:100vh;
  justify-content:center;
  align-items:center;
`;

const Image = styled.img`
position: absolute;
width:1000px;
height:600px;
border-radius:10px;
`;

const LeftArrow = styled(ArrowLeft)`
  position:absolute;
  width:50px;
  top:50%;
  left:150px;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;
const RightArrow = styled(ArrowRight)`
  position:absolute;
  width:50px;
  top:50%;
  right:10px;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;


const ImageCarousel = ({ styles }) => {
  let imageUrl = '';
  let thumbnailUrl = '';

  if (styles.length !== 0) {
    imageUrl = styles.map((item, index) => {
      const { url } = item.photos[0];
      return <Image key={index} src={url} alt="Women dress" />;
    });

    thumbnailUrl = styles.map((item, index) => {
      // eslint-disable-next-line camelcase
      const { thumbnail_url } = item.photos[0];
      // eslint-disable-next-line react/no-array-index-key
      // eslint-disable-next-line camelcase
      return <img key={index} src={thumbnail_url} alt="Women dress" />;
    });
  }

  return (
    <Slider>
      <ArrowsFullscreen />
      <LeftArrow />
      <RightArrow />
      {imageUrl}
      <ArrowDown />
      {/* {thumbnailUrl} */}
    </Slider>

  );
};

export default ImageCarousel;

import styled from 'styled-components';
import {
  ArrowLeft, ArrowRight, ArrowsFullscreen,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@styled-icons/bootstrap';

import {
  ArrowDown,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@styled-icons/evaicons-solid';

export const Slider = styled.div`
  position:relative;
  display:flex;
  height:85vh;
  //margin:10%;
  justify-content:center;
  align-items:center;
  margin-left:10%;
`;

export const Image = styled.img`
position: absolute;
width:700px;
height:550px;
`;
export const ThumbnailWrapper = styled.div`
  position:absolute;
  top:15%;
  z-index:9;
  left:5%;
`;

export const Thumbnail = styled.img`
&::after{
  content:" 🦄";
  position:absolute;
  left:0;
  bottom:0;
  height:5px;
  width:10005px;
  background:red;

};
 display: block;
 width:75px;
 height:75px;
 margin:10px;
 border: 1px solid black; 
`;

export const DownArrow = styled(ArrowDown)`
   width:40px;
   padding-left: 30%;
`;



export const LeftArrow = styled(ArrowLeft)`
  position:absolute;
  width:40px;
  top:50%;
  left:30%;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

export const RightArrow = styled(ArrowRight)`
  position:absolute;
  width:40px;
  top:50%;
  right:10%;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

export const FullscreenArrow = styled(ArrowsFullscreen)`
  position:absolute;
  width:15px;
  top:15%;
  right:10%;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

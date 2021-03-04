import styled, { css } from 'styled-components';
import {
  ArrowLeft, ArrowRight, ArrowsFullscreen,
} from '@styled-icons/bootstrap';
import { ArrowDown } from '@styled-icons/evaicons-solid';

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
width:90%;
height:80%;
`;
export const ThumbnailWrapper = styled.div`
  position:absolute;
  top:15%;
  z-index:9;
  left:5%;
`;

export const Thumbnail = styled.img`
 display: block;
 width:15%;
 height:15%;
 margin:3%;
 border: 1px solid black; 
`;

export const Underline = styled.hr`
 position:absolute;
 border: 4px solid pink;
 width:15%;
 left:2.75%;
 margin-top:-2%;
`;

export const DownArrow = styled(ArrowDown)`
   width:40px;
   padding-left:6%;
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

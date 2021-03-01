import styled from 'styled-components';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowsFullscreen,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@styled-icons/bootstrap';

export const Slider = styled.div`
  position:relative;
  display:flex;
  height:100vh;
  //margin:10%;
  justify-content:center;
  align-items:center;
`;

export const Image = styled.img`
position: absolute;
width:1000px;
height:600px;
border-radius:10px;
`;
export const ThumbnailWrapper = styled.div`
  z-index:9
`;
export const Thumbnail = styled.img`
 display: block;
 z-index:9;
 width:150px;
 margin:10px;
`;

export const LeftArrow = styled(ArrowLeft)`
  position:absolute;
  width:50px;
  top:50%;
  left:150px;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

export const RightArrow = styled(ArrowRight)`
  position:absolute;
  width:50px;
  top:50%;
  right:10px;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

export const FullscreenArrow = styled(ArrowsFullscreen)`
  position:absolute;
  width:30px;
  top:20%;
  right:-10px;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

export const DownArrow = styled(ArrowDown)`
 position:absolute;
  width:50px;
  bottom:20%;
  left:10px;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

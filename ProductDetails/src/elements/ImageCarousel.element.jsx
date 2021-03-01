import styled from 'styled-components';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowsFullscreen,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@styled-icons/bootstrap';

export const Slider = styled.div`
  position:relative;
  display:flex;
  height:85vh;
  //margin:10%;
  justify-content:center;
  align-items:center;
  margin-left:20%;
`;

export const Image = styled.img`
position: absolute;
width:600px;
height:600px;
`;
export const ThumbnailWrapper = styled.div`
  z-index:9
`;
export const Thumbnail = styled.img`
 display: block;
 z-index:9;
 width:75px;
 height:75px;
 margin:10px;
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
  top:10%;
  right:10%;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

export const DownArrow = styled(ArrowDown)`
 position:absolute;
 width:40px;
  bottom:20%;
  left:10%;
  font-size:3rem;
  z-index:10;
  cursor:pointer;
  user-select: none;
`;

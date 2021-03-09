import styled from 'styled-components';
import {
  ArrowLeftCircle, ArrowRightCircle, ArrowsAngleExpand,
} from '@styled-icons/bootstrap';

export const ImageWrapper = styled.div`
position:relative;
 max-width: 500px;
 height: 500px;
 overflow:hidden;
`;

export const Image = styled.img`
 width: 100%;
 min-height: 100%;  
 object-fit:cover;
`;
export const ImageUnderline = styled.hr`
position: absolute;
border: 1px solid #DFDFDF;
width:${(props) => (props.top ? '80%' : '90%')};
border-radius: 5px;
top:${(props) => (props.top ? '8%' : '95%')}

`;


export const LeftArrow = styled(ArrowLeftCircle)`
position: absolute;
width: 40px;
top: 50%;

font-size:3rem;

cursor: pointer;
user-select: none;
transition: 0.6s ease;
color:#4b5666;
  &:hover{
  color: white
}
`;

export const RightArrow = styled(ArrowRightCircle)`
position: absolute;
width: 40px;
top: 50%;

font-size: 3rem;
cursor: pointer;
user-select: none;
transition: 0.6s ease;
color:#4b5666;
  &:hover{
  color: white
}
`;

export const FullscreenArrow = styled(ArrowsAngleExpand)`
position: absolute;
width: 20px;
font-size: 3rem;
cursor: pointer;
user-select: none;
color:#4b5666;
  &:hover{
  color: white
}
`;

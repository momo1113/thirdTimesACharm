/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { Checkmark } from '@styled-icons/icomoon';
import { Plus, Star } from '@styled-icons/boxicons-regular';

export const SelectedStyled = styled.img`
border-radius: 50%;
margin:auto 10px;
height:65px;
width:65px;
cursor:pointer;
border:3px solid ${(props) => (props.curSelected ? 'black' : '#DFDFDF')}; 
padding:5px;

`;

export const QuantitySize = styled.div`
display:flex;
flex-wrap: wrap;
margin-top:7.5%;
`;

export const SizeSelect = styled.select`
flex: 3;
margin-right:10px;
cursor: pointer;
border-radius: 2px;
display:inline-block;
padding:15px 12px;
text-align:start;
&:focus {
  outline: none;
};
appearance: none;
${(props) => props.clicked && props.sizeVlue && css`

`}
`;

export const QuanitySelect = styled.select`
flex: 1;
width: 100%;
padding: 15px 12px;
font-weight: bold;
cursor: pointer;
border-radius: 2px;
text-align: center;
text-align-last: center;
appearance: none;
`;

export const AddToBag = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
`;

export const Bag = styled.button`
flex: 7;
width:100%;
margin-right: 10px;
padding: 15px 12px;
border:1px solid #4b5666;
text-align: center;
line-height:normal;
letter-spacing:.24rem;
cursor: pointer;
background-color:#4b5666;
color:white;
&:focus {
  outline: none;
}
&:hover{
  background-color:white;
  color:#4b5666;

}
`;

export const StarButton = styled.button`
flex: 1;
background-color: white;
border:1px solid #4b5666;
outline: none;
cursor: pointer;
`;

export const AddPlus = styled(Plus)`
height: 17px;
margin-bottom: 4px;
`;

export const FavStar = styled(Star)`
height: 16px;
`;

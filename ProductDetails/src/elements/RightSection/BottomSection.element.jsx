/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Checkmark } from '@styled-icons/icomoon';

export const SelectedStyled = styled.img`
position:relative;
border-radius: 50%;
margin:auto 10px;
height:50px;
width:49.781px;
cursor:pointer;
`;

export const QuantitySize = styled.div`
display:flex;
flex-wrap: wrap;
margin-top:20px;
`;

export const SizeSelect = styled.select`
flex: 3;

margin-right:10px;
font-weight: bold;
cursor: pointer;
border-radius: 2px;
display:inline-block;
padding:15px 12px;
text-decoration:none;
font-weight:300;
text-align:start;
&:focus {
  outline: none;
}
`;

export const QuanitySelect = styled.select`
flex: 1;
width: 100%;
padding:15px 12px;
font-weight: bold;
cursor: pointer;
border-radius: 2px;
text-align: center;
text-align-last: center;
&:focus {
  outline: none;
}
`;

export const CheckMark = styled(Checkmark)`
position:'absolute';
margin-bottom:15px;
height:15px;
  color: red;
`;

export const AddToBag = styled.div`
display:flex;
flex-wrap: wrap;
margin-top:20px;
`;

export const Bag = styled.button`
flex: 9;
margin-right:10px;
padding:15px 12px;
text-decoration:none;
border-color:coral;
text-align:start;
cursor: pointer;
outline:none;
&:focus {
  outline: none;
}
background-color:white;

`;

export const Star = styled.button`
flex: 1;
background-color:white;
border-color:coral;
outline:none;
cursor: pointer;
`;
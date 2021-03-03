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
flex: 2;
appearance: none;
width: 200px;
height: 40px;
margin-right:10px;
font-weight: bold;
cursor: pointer;
border-radius: 2px;
text-align: center;
text-align-last: center;

`;

export const QuanitySelect = styled.select`
 flex: 1;
 appearance: none;
width: 100%;
height: 40px;
font-weight: bold;
cursor: pointer;
border-radius: 2px;
text-align: center;
text-align-last: center;
`;

export const CheckMark = styled(Checkmark)`
position:'absolute';
margin-bottom:15px;
height:15px;
  color: red;
`;

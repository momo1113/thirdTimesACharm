/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SelectedStyled = styled.img`
border-radius: 50%;
margin:auto 10px;
height:50px;
width:49.781px;
cursor:pointer;
&::after{
  ${((props) => props.check && 'content:"√"')}; 
`;
export const QuantitySize = styled.div`
display:flex;
`;

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
`;

export const CheckMark = styled(Checkmark)`
position:'absolute';
margin-bottom:15px;
height:15px;
  color: red;
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { CheckmarkCircle2 } from '@styled-icons/evaicons-solid'

export const SelectedStyled = styled.div`
background-color:${(props) => props.color};
border-radius: 50%;
margin:auto 10px;
height:50px;
width:49.781px;
border: 1px solid black;
`;

export const CircleCheckMark = styled(CheckmarkCircle2)`
   z-index:10;
   margin-top:0px auto;
  color: red;
`
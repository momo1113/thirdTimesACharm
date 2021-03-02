/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SelectedStyled = styled.div`
background-color:${(props) => props.color};
border-radius: 50%;
margin:auto 10px;
height:50px;
width:49.781px;
border: 1px solid black;
&::after{
  ${((props) => props.check && 'content:"√"')
  };
  margin:30px;
  margin-bottom:10px;
}
`;


export const QuantitySize = styled.div`
display:flex;
`;
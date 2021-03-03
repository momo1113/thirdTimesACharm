import styled from 'styled-components';

export const Reviews = styled.div`
margin-right:1%;
&::after{
  content:"Read all reviews";
  padding:5px;
  text-decoration:underline;
  font-size:14px;
}
`;

export const Category = styled.h3`
text-transform: uppercase;
margin-top:10px;
margin-bottom:0px;
`;

export const Name = styled.h1`
margin-top:1px;
`;

export const Price = styled.h4`
margin-top: 1px;
`;

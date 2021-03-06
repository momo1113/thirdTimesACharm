import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';
import { BagFill } from '@styled-icons/bootstrap';

export const Logo = styled.h1`
margin-left:10%;
margin-top:5%;
`;

// export const Search = styled.div`
// justify-self:end;
// margin-top:30%;
// `;

export const Input = styled.div`
border:1px solid black;
margin-top:30%;
height:30%;
padding-top:7.5px;
border: 1px solid #DFDFDF;
color:#4b5666;
letter-spacing:.06rem;
font: 1rem/normal Avenir Book,sans-serif;

`;

export const SearchIcon = styled(Search)`
color:#167a92;
height:25px;
margin:0 5px;
`;
export const AddBag = styled(BagFill)`
height:25px;
margin-bottom: 4px;
margin-top:32.5%;
margin-left:20px;
color:#167a92;
`;

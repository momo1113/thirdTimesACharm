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
height:20%;
padding:2px;
`;

export const SearchIcon = styled(Search)`
justify-self:end;
color: red;
height:25px;
`;
export const AddBag = styled(BagFill)`
height:25px;
margin-bottom: 4px;
margin-top:30%;
margin-left:20px;
`;

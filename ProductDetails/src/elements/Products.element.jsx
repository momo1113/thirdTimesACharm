import styled from 'styled-components';

export const Wrapper = styled.div`
margin:0 auto; 
display:grid;
grid-template-columns:60% auto;
grid-template-rows: 60px auto 90px;
grid-template-areas: "hd hd"
                      "image detail"
                      "info info"
`;

export const Header = styled.div`
grid-area:hd;
`;

export const Image = styled.div`
grid-area:image;
`;

export const Detail = styled.div`
grid-area:detail;
`;

export const Info = styled.div`
grid-area:info;
`;

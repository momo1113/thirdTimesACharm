import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
position:absolute;
left:0;
top:0;
right:0;
bottom:-100%;
background-color: rgba(0,0,0,0.9);
display:flex;
align-items:cener;
justify-content:center;
z-index:2;

`;

const BigImage = styled.div`
width: 60%;
height: 50%;
overflow:hidden;
margin-top:5%;
margin-left:5%;
`;

const Image = styled.img`
 max-width: 100%;
 max-height: 100%;

`;


const ImageModal = ({ curMainImageIndex, styles }) => {
    const bgMain = styles.map((item, index) => {
        const { url } = item.photos[0];
        return index === curMainImageIndex && <Image src={url} key={index} alt="styles" />;
    });

    return (
        <Modal>
            <BigImage >
                {bgMain}
                <button><div>X</div> </button>
            </BigImage>


        </Modal>
    );
};

export default ImageModal;

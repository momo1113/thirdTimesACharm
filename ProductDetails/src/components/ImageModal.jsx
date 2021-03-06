import React from 'react';



const ImageModal = ({ curMainImageIndex, styles }) => {
    const bgMain = styles.map((item, index) => {
        const { url } = item.photos[0];
        console.log(url);
        return index === curMainImageIndex && <img src={url} key={index} alt="styles" />;
    });

    return (
        <>
            {bgMain}
        </>
    );
};

export default ImageModal;

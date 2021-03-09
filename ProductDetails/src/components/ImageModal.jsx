import React from 'react';

import {
  Modal, BigImage, Image, Close,
} from '../elements/ImageModal.element.jsx';

// eslint-disable-next-line react/prop-types
const ImageModal = ({ curMainImageIndex, styles, getFullScreenClicked }) => {
  const bgMain = styles.map((item, index) => {
    const { url } = item.photos[0];
    return index === curMainImageIndex && (
      <>
        <Close type="submit" onClick={() => getFullScreenClicked(false)}>
          <div>X</div>
        </Close>
        <Image src={url} key={item.style_id} alt="styles" />
      </>
    );
  });

  return (
    <Modal>
      <BigImage>
        {bgMain}
      </BigImage>
    </Modal>
  );
};

export default ImageModal;

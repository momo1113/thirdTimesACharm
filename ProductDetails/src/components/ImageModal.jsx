import React, { useState } from 'react';

import {
  Modal, BigImage, Image, Close,
} from '../elements/ImageModal.element.jsx';


// eslint-disable-next-line react/prop-types
const ImageModal = ({ curMainImageIndex, styles, getFullScreenClicked }) => {
  const [clicked, setClicked] = useState(false);
  const [cur, setCur] = useState(curMainImageIndex);

  const bgMain = styles.map((item, index) => {
    const { url } = item.photos[0];
    return index === cur && (
      <Image src={url} key={item.style_id} alt="styles" onClick={() => setClicked(!clicked)} clicked={clicked} />
    );
  });


  return (
    <Modal>
      <BigImage>
        {bgMain}
      </BigImage>
      <Close type="submit" onClick={() => getFullScreenClicked(false)}>
        <div>X</div>
      </Close>
    </Modal>
  );
};

export default ImageModal;

import React, { useState } from 'react';
import {
  Underline,
  Thumbnail, Thumbnails, ThumbnailWrapper, UpArrow, DownArrow,
} from '../../elements/ThumbnailGallery.element.jsx';

// eslint-disable-next-line react/prop-types
const ThumbnailGallery = ({ styles, mainCurrent, getMainCurrent }) => {
  const [isLastImage, setIsLastImage] = useState(false);
  const [isFirstImage, setIsFirstImage] = useState(true);

  const downSlide = () => {
    // eslint-disable-next-line no-restricted-globals
    getMainCurrent(mainCurrent === length ? length : mainCurrent + 1);
    if (mainCurrent === length) {
      setIsLastImage(true);
      setIsFirstImage(false);
    }
  };

  const upSlide = () => {
    getMainCurrent(mainCurrent === 0 ? 0 : mainCurrent - 1);
    if (mainCurrent === 0) {
      setIsFirstImage(true);
      setIsLastImage(false);
    }
  };

  const thumbnailUrl = styles.map((item, index) => {
    const { url } = item.photos[0];
    return (
      <Thumbnails key={item.style_id} curImage={index === mainCurrent}>
        {
          index < 7 && (
            <Thumbnail
              index={index}
              src={url}
              alt="Women dress"
              onClick={() => getMainCurrent(index)}
              curImage={index === mainCurrent}
            />
          )
        }

        { index === mainCurrent
          && <Underline />}
      </Thumbnails>
    );
  });
  return (
    <>
      {/* {thumbnailUrl} */}
      <ThumbnailWrapper hasArrow={styles.length > 7}>
        {
          styles.length > 7 && isLastImage
          && <UpArrow onClick={upSlide} disabled={isFirstImage} />
        }
        {thumbnailUrl}
        {
          styles.length > 7 && isFirstImage
          && <DownArrow onClick={downSlide} disabled={isLastImage} />
        }
      </ThumbnailWrapper>
    </>
  );
};
export default ThumbnailGallery;

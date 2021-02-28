/* eslint-disable react/prop-types */
import React from 'react';

const ProductInfo = ({ product }) => {
// eslint-disable-next-line react/prop-types
  const { features } = product;
  let feature = [];
  if (features) {
    // eslint-disable-next-line react/prop-types
    feature = features.map((item, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={key}>{item.feature}</div>
    ));
  }

  return (
    <div className="slogan_features">
      <div className="slogan">
        <p>{product.slogan}</p>
      </div>
      <div className="feature">
        {feature}
      </div>
    </div>
  );
};

export default ProductInfo;

import React from 'react';

const ProductInfo = ({ product }) => {

    const { features } = product;
    let feature = [];
    if (features) {
        feature = features.map((item, key) => {
            return <div key={key}>{item.feature}</div>
        })
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
    )
};

export default ProductInfo;

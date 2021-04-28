import React from 'react';

const Product = ({product}) => {
    return (
        <div style={{border: '1px solid red', margin: '10px'}}>
            <h5>{product.name}</h5>
            <button>add to cart</button>
        </div>
    );
};

export default Product;
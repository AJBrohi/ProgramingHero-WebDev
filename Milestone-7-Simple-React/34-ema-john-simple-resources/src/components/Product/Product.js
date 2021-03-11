import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.mara);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>Onle {stock} left in stock - Order soon</p>
                <button
                    className='main-button'
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
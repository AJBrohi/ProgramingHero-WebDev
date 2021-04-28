import React from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';
import {connect} from 'react-redux';

const Shop = (props) => {
    console.log(props.products);
    const products = [
        
    ]
    return (
        <div>
            <h4>Shop</h4>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart, 
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
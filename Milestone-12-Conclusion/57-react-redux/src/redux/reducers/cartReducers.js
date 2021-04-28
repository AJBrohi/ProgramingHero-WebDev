import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";


const initialState = {
    cart: [],
    products: [
        { name: 'lenovo laptop', id: 1 },
        { name: 'asus laptop', id: 2 },
        { name: 'hp laptop', id: 3 },
        { name: 'dell laptop', id: 4 },
        { name: 'toshiba laptop', id: 5 },
        { name: 'msi laptop', id: 6 }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.id]
            }
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return { cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;
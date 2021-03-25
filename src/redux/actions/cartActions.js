import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
        if (item.id === product.id) {
            alreadyInCart = true;
            item.count++;
        }
        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 })
        }
        dispatch({
            type: ADD_TO_CART,
            payload: { cartItems },
        })
    })
}

export const removeFromCart = (items, product) => (dispatch) => {
    // if (product.count === 0) {
    const cartItems = items.slice().filter(
        item => item.id !== product.id
    );
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems }
    })
    // }
}
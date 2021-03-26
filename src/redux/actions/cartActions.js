import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT, CALC_TOTAL } from "../types/types";

export const addToCart = (product) => (dispatch, getState) => {

    const cartItems = getState().cart.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach(item => {
        if (item.id === product.id) {
            alreadyInCart = true;
            item.count++;
        }
    });

    if (!alreadyInCart) {
        cartItems.push({ ...product, count: 1 })
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState()
        .cart.cartItems.slice()
        .filter((item) =>
            item.id !== product.id
        );

    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decrement = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach(item => {
        if (item.id === product.id) {
            item.count--;
        }
    });

    dispatch({ type: DECREMENT, payload: { cartItems } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const priceTotal = () => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let itemPrices = [];

    cartItems.forEach((item) => {
        if (item.count > 1) {
            itemPrices.push(item.price * item.count)
        } else {
            itemPrices.push(item.price)
        }
        return itemPrices;
    })
    itemPrices.reduce((total, item) => total + item, 0);
    dispatch({
        type: CALC_TOTAL,
        payload: { itemPrices, cartItems }
    })
}
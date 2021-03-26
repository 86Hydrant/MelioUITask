import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT, CALC_TOTAL } from "../types/types"


export const cartReducer = (state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"), itemPriceTotal: 0 }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { cartItems: action.payload.cartItems };
        case REMOVE_FROM_CART:
            return { cartItems: action.payload.cartItems };
        case DECREMENT:
            return { cartItems: action.payload.cartItems };
        case CALC_TOTAL:
            return { ...state, itemPriceTotal: action.payload.itemPrices }
        default:
            return state;
    }
}
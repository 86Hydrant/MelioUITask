import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types"


export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { cartItems: action.payload.cartItems };
        case REMOVE_FROM_CART:
            return { cartItems: action.payload.cartItems };
        default:
            return state;
    }
}
import { FETCH_PRODUCTS } from "../types/types"

export const productReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload }
        default:
            return state;
    }
}
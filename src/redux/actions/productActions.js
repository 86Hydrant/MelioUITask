import { FETCH_PRODUCTS } from "../types/types";

export const fetchProducts = () => async (dispatch) => {

    const url = "https://falconx-development.coffee4tech.net/products/public?country=GB"
    const response = await fetch(url);
    // const json = await response.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
    })




}
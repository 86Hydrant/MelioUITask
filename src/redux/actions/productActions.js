import { FETCH_PRODUCTS } from "../types/types";

export const fetchProducts = () => async (dispatch) => {

    const url = "https://falconx-development.coffee4tech.net/products/public?country=GB"
    const response = await fetch(url);
    const json = await response.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: json,
    });
};

// export const fetchProducts = () => async (dispatch) => {
//     const res = await fetch("/api/products");
//     const data = await res.json();
//     console.log(data);
//     dispatch({
//         type: FETCH_PRODUCTS,
//         payload: data,
//     });
// };
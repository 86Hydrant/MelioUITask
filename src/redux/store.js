
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { productReducers } from './reducers/productReducers';

const initialState = {};

const store = createStore(combineReducers({
    products: productReducers
}),
    initialState,
    applyMiddleware(thunk)
);

export default store;
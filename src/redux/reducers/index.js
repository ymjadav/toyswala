import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from "./productReducer";
import { wishListReducer } from './wishlistReducer';
import { cartReducer } from './cartReducer';

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
    wishlist: wishListReducer
})
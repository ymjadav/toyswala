import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    products: []
}

const cartState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
}



export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}
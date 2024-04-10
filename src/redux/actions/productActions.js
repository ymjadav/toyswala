import { ActionTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELETCED_PRODUCT,
        payload: product
    }
}


export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELETCED_PRODUCT
    }
}


export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        paylaod: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        paylaod: product
    }
}

export const deleteFromCart = (product) => {
    return {
        type: ActionTypes.DELETE_FROM_CART,
        payload: product
    }
}


export const placeOrder = (orderData) => {
    return {
        type: ActionTypes.PLACE_ORDER,
        paylaod: orderData
    }
}
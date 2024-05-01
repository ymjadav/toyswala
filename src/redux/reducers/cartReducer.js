import { ActionTypes } from "../constants/actionTypes"

const cartState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
}



export const cartReducer = (state = cartState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const exist = state.cart.find((product) => product.id === payload.id)
            if (exist) {
                const updatedCart = state.cart.map(product =>
                    product.id === payload.id ? { ...product, quantity: product.quantity + payload.quantity, totalPrice: product.totalPrice + payload.price, image: payload.image } : product
                )
                return {
                    ...state,
                    cart: updatedCart,
                    totalQuantity: state.totalQuantity + payload.quantity,
                    totalPrice: state.totalPrice + payload.price
                }
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            id: payload.id,
                            price: payload.price,
                            category: payload.category,
                            quantity: payload.quantity,
                            name: payload.name,
                            totalPrice: payload.totalPrice,
                            image: payload.image
                        }
                    ],
                    totalQuantity: state.totalQuantity + payload.quantity,
                    totalPrice: state.totalPrice + payload.price
                }
            }


        case ActionTypes.REMOVE_ITEM:
            const existingItem = state.cart.find(product => product.id === payload.id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    const updatedCart = state.cart.filter(product => product.id !== payload.id);
                    return {
                        ...state,
                        cart: updatedCart,
                        totalQuantity: state.totalQuantity - 1,
                        totalPrice: state.totalPrice - existingItem.price
                    }
                } else {
                    const updatedCart = state.cart.map(product =>
                        product.id === payload.id ? { ...product, quantity: product.quantity - 1, totalPrice: product.totalPrice - product.price } : product
                    )
                    return {
                        ...state,
                        cart: updatedCart,
                        totalQuantity: state.totalQuantity - 1,
                        totalPrice: state.totalPrice - existingItem.price
                    }
                }
            }

        case ActionTypes.DELETE_FROM_CART:
            const filteredCart = state.cart.filter(product => product.id !== payload.id);
            return {
                ...state,
                cart: filteredCart,
                totalQuantity: state.totalQuantity - payload.quantity,
                totalPrice: state.totalPrice - payload.totalPrice
            }

        case ActionTypes.PLACE_ORDER:
            return {
                ...state,
                cart: [],
                totalPrice: 0,
                totalQuantity: 0
            }

        default:
            return state;
    }
}

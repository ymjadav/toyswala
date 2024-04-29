import { ActionTypes } from "../constants/actionTypes"

const wishlistState = {
    wishlist: []
}

export const wishListReducer = (state = wishlistState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_WISHLIST:
            const exist = state.wishlist.find(product => product.id === payload.id);
            if (!exist) {
                return {
                    ...state,
                    wishlist: [
                        ...state.wishlist,
                        {
                            id: payload.id,
                            name: payload.name,
                            category: payload.category,
                            price: payload.price,
                            image: payload.image
                        }

                    ]
                }
            }

        case ActionTypes.REMOVE_FROM_WISHLIST:
            const filteredWishlist = state.wishlist.filter(product => product.id !== payload.id);
            return {
                ...state,
                wishlist: filteredWishlist
            }

        default:
            return state

    }
}
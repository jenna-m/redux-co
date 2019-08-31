import { ADD_TO_CART } from '../../constants/ActionTypes';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}


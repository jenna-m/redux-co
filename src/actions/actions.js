import { 
    ADD_TO_CART, 
    REMOVE_ITEM, 
    ADD_QUANTITY, 
    MINUS_QUANTITY,
    CHANGE_SIZE,
} from '../constants/actionTypes';

export const addToCart = (id) => {
    return { type: ADD_TO_CART, id }
};

export const addQuantity = (id) => {
    return { type: ADD_QUANTITY, id }
};

export const minusQuantity = (id) => {
    return { type: MINUS_QUANTITY, id }
};

export const removeItem = (id) => {
    return { type: REMOVE_ITEM, id }
};

export const changeSize = (id) => {
    return { type: CHANGE_SIZE, id }
};
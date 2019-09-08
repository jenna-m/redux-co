import { createStore } from 'redux';
import ShopContent from '../constants/ShopContent';
import cartReducer from '../reducers/CartReducer';

const initState = {
    items: ShopContent,
    addedItems: [],
    total: 0
}

export const store = createStore(cartReducer, initState);
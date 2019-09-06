import { createStore } from 'redux';
import cartReducer from '../reducers/CartReducer';

export const store = createStore(cartReducer);
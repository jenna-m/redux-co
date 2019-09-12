import { createStore } from 'redux';
import CartReducer from '../reducers/CartReducer';

export const store = createStore(CartReducer);

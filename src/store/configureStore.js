import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // localStorage for web
import CartReducer from '../reducers/CartReducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['addedItems'] // will be persisted
};

const pReducer = persistReducer(persistConfig, CartReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // localStorage for web
import cartReducer from '../reducers/reducers';

const persistConfig = {
    key: 'root',
    storage
};

const pReducer = persistReducer(persistConfig, cartReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
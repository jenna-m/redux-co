import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import cartReducer from './reducers/CartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const store = createStore(cartReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
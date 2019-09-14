import React from 'react';
import { BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../src/store/configureStore';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Routes } from './constants/Routes';


class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <ScrollToTop>
              <div className="App">
                <Navbar />
                <Switch>
                  { Routes }
                </Switch>
                <Footer />
              </div>
            </ScrollToTop>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default withRouter(App);

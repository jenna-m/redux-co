import React from 'react';
import { BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store/configureStore';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Routes } from './constants/Routes';


class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
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
      </Provider>
    );
  }
}

export default withRouter(App);

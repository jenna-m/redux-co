import React from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Routes } from './constants/Routes';


class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default withRouter(App);

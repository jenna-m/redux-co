import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import { Routes } from './constants/Routes';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            { Routes }
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, MemoryRouter } from 'react-router-dom'
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import Home from './pages/home.jsx';
import './App.css';
import './index.css';
import Navbar from './components/navbar.jsx';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

ReactDOM.render((
<BrowserRouter>
  <App />
</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
=======

import { Route, Link, MemoryRouter } from 'react-router-dom'

>>>>>>> Stashed changes
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import './index.css';
<<<<<<< Updated upstream
import NavBar from './NavBar.jsx';
=======
import NavBar from './components/navbar.jsx';
>>>>>>> Stashed changes
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to felttrip</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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

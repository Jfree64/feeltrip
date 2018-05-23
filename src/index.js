import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import './index.css';
import NavBar from './NavBar.jsx';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to feeltrip</h1>
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {navbar} from './navbar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <navbar />
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

export default App;

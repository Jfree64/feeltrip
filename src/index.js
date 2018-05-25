import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import './index.css';
import Navbar from './Navbar.jsx';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

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

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import logo from './logo.svg';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import LiveMap from './pages/LiveMap.jsx';
import Blog from './pages/Blog.jsx';
import Donate from './pages/Donate.jsx';
import './App.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/map' component={LiveMap}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/donate' component={Donate}/>
        </Switch>
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

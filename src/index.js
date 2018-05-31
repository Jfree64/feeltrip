/*important bs*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

/*pages*/
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import LiveMap from './pages/LiveMap.jsx';
import Blog from './pages/Blog.jsx';
import Donate from './pages/Donate.jsx';
import NoMatch from './pages/NoMatch.jsx';

/*style*/
import './index.scss';
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
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;

ReactDOM.render((
<BrowserRouter>
  <App />
</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

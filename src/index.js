/*important bs*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import * as contentful from 'contentful'

/*pages*/
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import LiveMap from './pages/LiveMap.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/blog/BlogPost.jsx';
import Donate from './pages/Donate.jsx';
import Footer from './components/Footer.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import NoMatch from './pages/NoMatch.jsx';

/*style*/
import './index.css';
import registerServiceWorker from './registerServiceWorker';

var client = contentful.createClient({
  space: 'map6q868erex',
  accessToken: 'becd0b9c6718713ac430ddf0131bbf958a6bedf27cbd83d1fb2692cbf8960d73' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>feel trip</title>
          <link rel="canonical" href="http://feeltrip.us/" />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/the-ride' component={About}/>
          <Route exact path='/map' component={LiveMap}/>
          <Route exact path='/blog' component={Blog}/>
          <Route path='/blog/:blogPost' component={BlogPost}/>
          <Route exact path='/donate' component={Donate}/>
          <Route path='/coming-soon' component={ComingSoon}/>
          <Route component={NoMatch} />
        </Switch>
        <Footer />
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

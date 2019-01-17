import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Head from './components/head/index'

import Header from './components/header/index';
import Home from './pages/home/index';
import About from './pages/about/index';
import LiveMap from './pages/liveMap/index';
import Blog from './pages/blog/index';
import BlogPost from './pages/blog/blogPost/index';
import Donate from './pages/donate/index';
import Footer from './components/footer/index';
import ComingSoon from './pages/comingSoon/index';
import NoMatch from './pages/noMatch/index';

import './style/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head ogUrl='/aaa' ogImg=''/>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
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

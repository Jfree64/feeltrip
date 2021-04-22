/*important bs*/
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import ReactGA from 'react-ga';

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { loadBlog } from './store/Blog'

const store = configureStore()
store.dispatch(loadBlog())

ReactGA.initialize('UA-120672166-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
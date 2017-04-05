import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

//module imports
import About from './modules/About';
import Repos from './modules/Repos';

ReactDOM.render(
  <Router history={hashHistory}>
    {/*add routes here*/}
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}/>
    </Route>    
  </Router>,
  document.getElementById('root')
);


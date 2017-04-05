import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

//module imports
import Home from './modules/Home';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';

ReactDOM.render(
  <Router history={hashHistory}>
    {/*add routes here*/}
    <Route path="/" component={App}>
      {/*home route*/}
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}>
        {/*add params new route*/}
        <Route path="/repos/:userName/:repoName" component={Repo}></Route>
      </Route>
    </Route>    
  </Router>,
  document.getElementById('root')
);


import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './App.css';

import NavLink from './modules/NavLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          {/*parent routes are active when child routes are active*/}
          {/* 'onlyActiveOnIndex={true}' would work if passed to NavLink as well*/}
          {/*<p><NavLink to="/">Home</NavLink></p>*/}
          {/*use IndexLink to only select index*/}
          <p><IndexLink to="/" activeClassName="active">Home</IndexLink></p>
          <p><NavLink to="/about"  activeClassName="active">About</NavLink></p>
          <p><NavLink to="/repos" activeClassName="active">Repos</NavLink></p>
        </nav>
        <h1>Home page</h1>

        {/*shows the content of the children routes*/}
        {this.props.children}
      </div>
    );
  }
}

export default App;

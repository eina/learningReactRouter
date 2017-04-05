import React, { Component } from 'react';
// import { Link } from 'react-router';
import './App.css';

import NavLink from './modules/NavLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <p><NavLink to="/">Home</NavLink></p>
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

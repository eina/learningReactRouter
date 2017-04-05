import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/repos">Repos</Link></p>
        </nav>
        <h1>Home page</h1>
      </div>
    );
  }
}

export default App;

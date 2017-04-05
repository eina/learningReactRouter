import React, { Component } from 'react';
import { Link } from 'react-router';

// Nav Link Wrappers
// only use activeClassName/activeStyle where we want them to

class NavLink extends Component {
  // clones our props and in this use case it clones activeClassName to our desired component for us to benefit from.
  render(){
    return <Link {...this.props} activeClassName="active" />
  }  
}

export default NavLink;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
          <nav>
              <div className="nav-wrHeaderer">
                  <div className="container">
                      <Link to="/" className="brand-logo">Paste Cloud</Link>
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                          <li><Link to="/pastes/new">Create New</Link></li>
                          <li><Link to="/pastes/list">List</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
        );
    }
}

export default Header;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logotype from '../images/headerLogotype.png';
import logo from '../images/headerLogo.png';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
          }}>
        <div className="navbar-brand">
          <NavLink to="/donate" className="navbar-item">
            <img
              style={{
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                marginRight: 15
              }}
              src={logotype}
              width="30px" alt="logotype" />
            <span>FeelTrip.us</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink to="/donate" className="navbar-item">
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Code Blog
            </NavLink>
            <NavLink to="/donate" className="navbar-item">
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fab fa-lg fa-medium"></i>
              </span>
              Medium
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink to="/about" className="navbar-link" >
                About
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink to="/livemap" className="navbar-item">
                  Map
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink to="/blog" className="navbar-item">
                  Blog
                </NavLink>
                <NavLink to="/donate" className="navbar-item">
                  Donate
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <NavLink to="/" className="navbar-item">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </NavLink>
            <NavLink to="/" className="navbar-item">
              <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </NavLink>
            <NavLink to="/" className="navbar-item">
              Resume
              <span className="icon" style={{ color: '#0077B5', marginLeft: 5 }}>
                <i className="fab fa-lg fa-linkedin"></i>
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}


export default Header;

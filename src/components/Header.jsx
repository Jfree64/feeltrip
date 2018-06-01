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
                marginRight: 15
              }}
              src={logotype}
              alt="logotype"/>
          </NavLink>

          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <NavLink to="/about" className="navbar-item" >
              About
            </NavLink>
              <NavLink to="/livemap" className="navbar-item">
                Map
              </NavLink>
              <NavLink to="/blog" className="navbar-item">
                Blog
              </NavLink>
              <NavLink to="/donate" className="navbar-item">
                <div className="button donate"> Donate </div>
              </NavLink>
        </div>
        </div>
      </nav>
    )
  }
}


export default Header;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logotype from '../images/headerLogotype.png';
import logo from '../images/headerLogo.png';
class Navbar extends Component {
    render() {
        return (
            <div className="header">
              <img src={logotype} alt="logotype" className="headerLogotype"/>
              <img src={logo} alt="logo" className="headerLogo"/>
              <ul id="headerButtons">
                <li className="navButton"><Link to="">Home</Link></li>
                <li className="navButton"><Link to="/about">About</Link></li>
                <li className="navButton"><Link to="">Map</Link></li>
                <li className="navButton"><Link to="">Blog</Link></li>
                <li className="donateButton"><Link to="">Donate</Link></li>
              </ul>
            </div>
        )
    }
}
export default Navbar;

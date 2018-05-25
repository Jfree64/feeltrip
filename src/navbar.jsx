import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home</Link></li>
                    <li className="navButton"><Link to="/about">About</Link></li>
                    <li className="navButton"><Link to="/about">Home</Link></li>
                    <li className="navButton"><Link to="/about">Home</Link></li>
                </ul>
            </header>
        )
    }
}
export default Navbar;

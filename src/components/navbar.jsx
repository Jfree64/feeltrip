import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home</Link></li>
<<<<<<< Updated upstream:src/navbar.jsx
                    <li className="navButton"><Link to="/about">About</Link></li>
                    <li className="navButton"><Link to="/about">Home</Link></li>
                    <li className="navButton"><Link to="/about">Home</Link></li>
=======
                    <li className="navButton"><Link to="">About</Link></li>
                    <li className="navButton"><Link to="">Map</Link></li>
                    <li className="navButton"><Link to="">Blog</Link></li>
>>>>>>> Stashed changes:src/components/navbar.jsx
                </ul>
            </header>
        )
    }
}
export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import logotype from '../../images/feeltrip-logotype-black@2x.png';
import logo from '../../images/feeltrip-logo@2x.png';

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
      <nav className="navbar" aria-label="main navigation">
      {/*feeltrip logo*/}
          <Link to="/" className='headerLogo'>
            <img  style={{marginRight: 15, height: 40}} src={logo} alt="logo"/>
          </Link>
      {/*feeltrip logotype and hamburger*/}
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-hidden-mobile">
            <img style={{marginRight: 15, height: 40}} src={logotype} alt="logotype"/>
          </Link>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      {/*collapsable nav links*/}

        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
              <Link to="/" className="navbar-item navbar-text" > HOME </Link>
              <Link to="/about" className="navbar-item navbar-text" > ABOUT </Link>
              <Link to="/map" className="navbar-item navbar-text"> MAP </Link>
              <Link to="/blog" className="navbar-item navbar-text"> BLOG </Link>

            <div className="navbar-item">
              <a href="https://donate.nami.org/feeltrip" className='button gradient'> DONATE </a>
            </div>
            </div>
        </div>
      </nav>
    )
  }
}


export default Header;

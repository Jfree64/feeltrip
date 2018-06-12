import React from 'react';
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
      <nav className="navbar" aria-label="main navigation">
      {/*feeltrip logo*/}
          <NavLink to="/" className='headerLogo'>
            <img  style={{marginRight: 15, height: 40}} src={logo} alt="logo"/>
          </NavLink>
      {/*feeltrip logotype and hamburger*/}
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item is-hidden-mobile">
            <img style={{marginRight: 15, height: 40}} src={logotype} alt="logotype"/>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      {/*collapsable nav links*/}

        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
              <NavLink to="/" className="navbar-item" > HOME </NavLink>
              <NavLink to="/about" className="navbar-item" > ABOUT </NavLink>
              <NavLink to="/coming-soon" className="navbar-item"> MAP </NavLink>
              <NavLink to="/blog" className="navbar-item"> BLOG </NavLink>

            <a href="https://ifundraise.nami.org/index.cfm?fuseaction=donate.personalCampaign&participantID=1523" className="navbar-item">
              <div className='button donate'> DONATE </div>
            </a>
            </div>
        </div>
      </nav>
    )
  }
}


export default Header;

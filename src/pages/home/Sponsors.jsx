import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logotype from '../../images/headerLogotype.png';

class Sponsors extends Component {
    render() {
        return (
          <section class="section has-background-white has-text-dark">
          <h3 class="label column is-10 is-offset-1 has-text-centered has-text-dark">SPONSORS:</h3>
          <nav class="level">
            <NavLink to="/coming-soon" class="sponsor level-item has-text-centered">
              <img src={logotype} alt="" style={{height: 30}} />
            </NavLink>
            <NavLink to="/coming-soon" class="sponsor level-item has-text-centered">
              <img src={logotype} alt="" style={{height: 30}} />
            </NavLink>
            <NavLink to="/coming-soon" class="sponsor level-item has-text-centered">
              <img src={logotype} alt="" style={{height: 30}} />
            </NavLink>
            <NavLink to="/coming-soon" class="sponsor level-item has-text-centered">
              <img src={logotype} alt="" style={{height: 30}} />
            </NavLink>
            <NavLink to="/coming-soon" class="sponsor level-item has-text-centered">
              <img src={logotype} alt="" style={{height: 30}} />
            </NavLink>
          </nav>
          </section>
        )
    }
}
export default Sponsors;

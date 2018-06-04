import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logotype from '../../images/headerLogotype.png';

class Sponsors extends Component {
    render() {
        return (
          <section class="section has-background-white has-text-dark">
          <nav class="level">
            <NavLink class="level-item has-text-centered">
              <a class="link is-info">Home</a>
            </NavLink>
            <p class="level-item has-text-centered">
              <a class="link is-info">Menu</a>
            </p>
            <p class="level-item has-text-centered">
              <img src="https://bulma.io/images/bulma-type.png" alt="" style={{height: 30}} />
            </p>
            <p class="level-item has-text-centered">
              <a class="link is-info">Reservations</a>
            </p>
            <p class="level-item has-text-centered">
              <a class="link is-info">Contact</a>
            </p>
          </nav>
          </section>
        )
    }
}
export default Sponsors;

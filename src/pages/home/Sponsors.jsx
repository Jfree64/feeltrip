import React, { Component } from 'react';

import chela from '../../images/sponsorChela.png';
import logotype from '../../images/headerLogotype.png';

class Sponsors extends Component {
    render() {
        return (
          <section className="section has-background-white has-text-dark">
          <h3 className="label column is-10 is-offset-1 has-text-centered has-text-dark">SPONSORS:</h3>
          <nav className="level">
            <a to="/coming-soon" className="sponsor level-item has-text-centered">
              <img src={chela} className="sponsorImg" alt="" style={{height: 30}} />
            </a>
            <a to="/coming-soon" className="sponsor level-item has-text-centered">
              <img src={logotype} className="sponsorImg" alt="" style={{height: 30}} />
            </a>
            <a to="/coming-soon" className="sponsor level-item has-text-centered">
              <img src={logotype} className="sponsorImg" alt="" style={{height: 30}} />
            </a>
            <a to="/coming-soon" className="sponsor level-item has-text-centered">
              <img src={logotype} className="sponsorImg" alt="" style={{height: 30}} />
            </a>
            <a to="/coming-soon" className="sponsor level-item has-text-centered">
              <img src={logotype} className="sponsorImg" alt="" style={{height: 30}} />
            </a>
          </nav>
          </section>
        )
    }
}
export default Sponsors;

import React from 'react';

import chela from '../../../images/sponsorChela.png';

const sponsors = [
  {name: 'chela',
    image: chela,

  }
]

export const Sponsors = () => (
  <section className="section has-background-white has-text-dark">
    <h3 className="label column is-10 is-offset-1 has-text-centered has-text-dark">SPONSORS:</h3>
    <nav className="level">
        {sponsors.map((sponsor) => 
          <a to="/coming-soon" className="sponsor level-item has-text-centered">
            <img href={sponsor.image} className="sponsorImg" alt="" style={{height: 30}} />
          </a>
          )
        }
    </nav>
  </section>
)


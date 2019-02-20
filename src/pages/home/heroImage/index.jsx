import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroImage = (props) => (
          <section className="hero has-background-black headerImg">
            <img src={props.img} className="hero-image" alt=""/>
            <div className="hero-body page-header-title">
              <div className="container">
                <img src={props.logo} className='hero-logo is-hidden-tablet'/>
                <h2 className="is-size-1 is-size-3-mobile subtitle has-text-dark">
                  stigma ends here
                </h2>
                <div  className="is-centered">
                  <a href="https://donate.nami.org/feeltrip" className='button gradient'> DONATE </a>
                </div>
              </div>
            </div>
          </section>

)

export default HeroImage;

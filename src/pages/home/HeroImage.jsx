import React from 'react';

const HeroImage = (props) => (
          <section className="hero has-background-black headerImg">
            <img src={props.img} className="hero-image" alt=""/>
            <div className="hero-body page-header-title is-hidden-desktop">
              <div className="container">
                <h1 className="title is-size-2-mobile">
                  FEEL TRIP
                </h1>
                <h2 className="is-size-2 is-size-3-mobile subtitle">
                  this is a subtitle
                </h2>
                <a href="https://ifundraise.nami.org/index.cfm?fuseaction=donate.personalCampaign&participantID=1523" className="is-centered">
                  <div className='button gradient'> DONATE </div>
                </a>
              </div>
            </div>
          </section>

)

export default HeroImage;

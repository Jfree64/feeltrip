import React from 'react';

const HeroImage = (props) => (
          <section className="hero has-background-black headerImg">
            <img src={props.img} className="hero-image" alt=""/>
            <div className="hero-body page-header-title">
              <div className="container">
                <img src={props.logo} className='hero-logo is-hidden-tablet'/>
                <h2 className="is-size-1 is-size-3-mobile subtitle has-text-dark">
                  stigma ends here
                </h2>
                <a href="https://ifundraise.nami.org/index.cfm?fuseaction=donate.personalCampaign&participantID=1523" className="is-centered">
                  <div className='button gradient'> DONATE </div>
                </a>
              </div>
            </div>
          </section>

)

export default HeroImage;

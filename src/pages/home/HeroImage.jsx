import React, { Component } from 'react';

const HeroImage = (props) => (
          <section className="hero has-background-black headerImg">
            <img src={props.img} class="hero-image"/>
            {/*<div className="hero-body">
              <div class="container">
                <h1 class="title">
                  <span>Feel Trip</span>
                </h1>
                <h2 class="subtitle">
                  <span>a ride across the US to end mental health stigma</span>
                </h2>
              </div>
            </div>*/}
          </section>

)

export default HeroImage;

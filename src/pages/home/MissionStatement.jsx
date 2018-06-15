import React, { Component } from 'react';

class MissionStatement extends Component {
    render() {
        return (
          <section id='missionStatement' className="section has-text-light has-background-black is-tilty-right no-padding-top">
          <div className='is-constrained'>
          <div className="container is-fluid is-tilty-left">
          <h2 className="subtitle column has-text-centered is-size-3-mobile"><span className="line">a ride across the US to end</span> <span className="line"> mental health stigma</span></h2>
            <div className="columns is-multiline">
              <div className="column text-is-centered">
                <p>feel trip is a series of rides with one goal - To bring light to mental health issues in an effort to reduce, and eventually eliminate, the surrounding stigma.

As we ride, we share the stories of those directly affected by mental health issues on our blog, capture and share our own journey via social media, and raise funds for a chraritable organization.</p>
              </div>
              <div className="column text-is-centered">
                <p>Our first feel trip takes us across the United States as we fundraise for the National Alliance for Mental Illness (NAMI). Riding a bike 3500 miles is hard, but opening up about mental health can be even more difficult. We challenge ourselves with both in the hopes that we can inspire others to do the same.</p>
              </div>
              </div>
          </div>
        </div>
          </section>
        )
    }
}
export default MissionStatement;

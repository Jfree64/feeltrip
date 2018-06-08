import React, { Component } from 'react';

class MissionStatement extends Component {
    render() {
        return (
          <section className="section has-text-light has-background-black is-tilty-right">
          <div className='is-constrained'>
          <div className="container is-fluid is-tilty-left">
          <h2 className="subtitle column has-text-centered"><span class="line">a ride across the US to end</span> <span class="line"> mental health stigma</span></h2>
            <div className="columns is-multiline">
              <div className="column text-is-centered">
                <p>Feel trip is a series of rides with one goal - To bring light to mental illness issues in an effort to reduce, and eventually eliminate, the surrounding stigma.

As we ride, we share the stories of those directly affected by mental health issues on our blog, capture and share our journey via social media, and raise funds for the National Alliance for Mental Illness (NAMI).

Sharing is hard. We challenge ourselves in the hopes that we can inspire others to do the same.</p>
              </div>
              <div className="column text-is-centered">
                <p>Our first ride, feel trip:US, is </p>
              </div>
              </div>
          </div>
        </div>
          </section>
        )
    }
}
export default MissionStatement;

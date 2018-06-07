import React, { Component } from 'react';
class MissionStatement extends Component {
    render() {
        return (
          <section class="section has-text-light has-background-black is-tilty-right">
          <div class="container is-fluid is-tilty-left">
          <h2 class="subtitle column is-10 is-offset-1 has-text-centered">a ride across the US to end mental health stigma</h2>
            <div class="columns is-multiline">
              <div class="column is-3"></div>
              <div class="column text-is-centered">
                <p>Feel trip is a series of rides with one goal - To bring light to mental illness issues in an effort to reduce, and eventually eliminate, the surrounding stigma.

As we ride, we share the stories of those directly affected by mental health issues on our blog, capture and share our journey via social media, and raise funds for the National Alliance for Mental Illness (NAMI).

Sharing is hard. We challenge ourselves in the hopes that we can inspire others to do the same.</p>
              </div>
              <div class="column is-3"></div>
          </div>
        </div>
          </section>
        )
    }
}
export default MissionStatement;

import React, { useEffect } from 'react';
import ImageTile from '../../../components/imageTile';
import Image1 from '../../../images/headerImg.png'
import Instafeed from 'instafeed.js'

import './index.scss'


// 🔥️ These are in your code (not this repo)
const Instagram = () => {
    var feed = new Instafeed({
      get: 'user',
      userId: '7599451113',
      clientId: 'c2286c081abf448585ddb7a34094a9d4',
      accessToken: '7599451113.c2286c0.4a777c9e22de4456ac36b61816cd89c7',      resolution: 'standard_resolution',
      template: '<a href="{{link}}" class="insta-post" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
      sortBy: 'most-recent',
      limit: 12,
      links: false
    });
    feed.run();
    return (
      <section id='missionStatement' className="section has-background-white ">
      <h2 className="subtitle column has-text-centered has-text-dark is-size-3-mobile"><span className="line">the story so far</span></h2>
      <div className="is-constrained">
        <div className="container columns is-multiline is-fluid">
          <div className="column has-text-centered">
            <p>We're on the road! Click any of the photos below to read the day's story on instagram. </p>
            <br/><br/>
          </div>
      ``</div>
      </div>
        <div id="instafeed" />
      </section>
    )
  }

export default Instagram;

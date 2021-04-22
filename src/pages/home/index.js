import React, { Component } from 'react';
import HeroImage from './heroImage';
import MissionStatement from './missionStatement';
import { Sponsors } from './sponsors';
import Upcoming from './upcoming';
import Instagram from './instagram';
import Subscribe from './subscribe';

import heroImage from 'images/headerImg.png'
import logotypeMain from '../../images/feeltrip-logotype-black.svg';

class Home extends Component {
    render() {
        return (
          <div className="Home">
            <HeroImage img={heroImage} logo={logotypeMain} />
            <MissionStatement />
            {/*<Sponsors />
            <Upcoming /> */}
            <Instagram />
            <Subscribe />
          </div>
        )
    }
}
export default Home;

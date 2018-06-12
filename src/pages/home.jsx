import React, { Component } from 'react';
import HeroImage from './home/HeroImage.jsx';
import MissionStatement from './home/MissionStatement.jsx';
import Sponsors from './home/Sponsors.jsx';
import Upcoming from './home/Upcoming.jsx';
import ImageTiles from './home/ImageTiles.jsx';

import heroImage from '../images/headerImg.png'

class Home extends Component {
    render() {
        return (
          <div className="Home">
            <HeroImage img={heroImage} />
            <MissionStatement />
            {/* <Sponsors />
            <Upcoming />
            <ImageTiles /> */}
          </div>
        )
    }
}
export default Home;

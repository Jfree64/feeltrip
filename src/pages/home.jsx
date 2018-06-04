import React, { Component } from 'react';
import HeroImage from './home/HeroImage.jsx';
import MissionStatement from './home/MissionStatement.jsx';
import Sponsors from './home/Sponsors.jsx';
import Upcoming from './home/Upcoming.jsx';

class Home extends Component {
    render() {
        return (
          <div className="Home">
            <HeroImage />
            <MissionStatement />
            <Sponsors />
            <Upcoming />
          </div>
        )
    }
}
export default Home;

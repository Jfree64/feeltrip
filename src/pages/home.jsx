import React, { Component } from 'react';
import HeroImage from './home/HeroImage.jsx';
import MissionStatement from './home/MissionStatement.jsx';
class Home extends Component {
    render() {
        return (
          <div className="Home">
            <HeroImage />
            <MissionStatement />
          </div>
        )
    }
}
export default Home;

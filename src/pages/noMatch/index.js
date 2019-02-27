import React, { Component } from 'react';
import HeroImage from '../home/heroImage';
import noMatch from '../../images/404.png'

class NoMatch extends Component {
    render() {
        return (
          <HeroImage img={noMatch} />
        )
    }
}
export default NoMatch;

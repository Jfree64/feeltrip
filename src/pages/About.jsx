import React, { Component } from 'react';
import PageHeader from '../components/PageHeader'
import TheMission from './about/TheMission'
import TheRide from './about/TheRide'
import RiderProfile from './about/RiderProfile'
import FAQ from './about/FAQ.jsx'

import aboutHeader from '../images/aboutHeader.png'
import jonoPhoto from '../images/aboutHeader.png'
import erinPhoto from '../images/aboutHeader.png'


const riders = [
  {id: 1,
  name: 'Jono Freeman',
  img: {jonoPhoto},
  bio: 'He is super cool!'},
  {id: 2,
  name: 'Erin Poland',
  img: {erinPhoto},
  bio: 'She is super cooler!'}
];

class About extends Component {
    render() {
        return (
          <div>
            <PageHeader color="is-info" title="" img={aboutHeader}>
              {/*<span className="line">don't just be about it,&nbsp; </span><span className="line">talk about it.</span>*/}
            </PageHeader>
            <TheMission />
            {/*<TheRide />
            <RiderProfile riders={riders}/>*/}
            <FAQ />
          </div>
        )
    }
}
export default About;

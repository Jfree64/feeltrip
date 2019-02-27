import React, { Component } from 'react';
import PageHeader from '../../components/pageHeader'
import TheMission from './theMission'
import TheRide from './theRide'
import RiderProfile from './riderProfile'
import FAQ from './faq'
import riders from './riderInfo'

import aboutHeader from '../../images/aboutHeader.png'

class About extends Component {
    render() {
        return (
          <div>
            <PageHeader color="is-info" title="" img={aboutHeader}>
              {/*<span className="line">don't just be about it,&nbsp; </span><span className="line">talk about it.</span>*/}
            </PageHeader>
            <TheMission />
            {/*
              <TheRide />
              <RiderProfile riders={riders}/>
            */}
            <FAQ />
          </div>
        )
    }
}
export default About;

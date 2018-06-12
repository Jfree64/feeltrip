import React, { Component } from 'react';
import PageHeader from '../components/PageHeader.jsx'

import aboutHeader from '../images/aboutHeader.png'

class About extends Component {
    render() {
        return (
          <PageHeader color="is-info" title="Code Blog" img={aboutHeader}>
        don't just be about it, talk about it.
      </PageHeader>
        )
    }
}
export default About;

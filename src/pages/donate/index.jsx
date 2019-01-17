import React, { Component } from 'react';
import Progress from './progress'
import Form from './form'

class Donate extends Component {
  render() {
    return(
      <div>
        <Progress />
        <Form />
      </div>
    );
  }
}
export default Donate;




{/* window.ddDonateOptions = {
  isEmbedded: 1,
  palette: 'light',
  donationType: 'event',
  eventID: 501
} */}

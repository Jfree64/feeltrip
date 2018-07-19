import React from 'react';
import { connect } from 'react-redux';

class DonateForm extends React.Component {
/*  componentDidMount() {
    this.ifr.onload = () => {
      this.ifr.contentWindow.postMessage('hello', '*');
    };
  }

  componentWillReceiveProps(nextProps) {
    for (const [objectid, liveData] of Object.entries(nextProps.objectsLive)) {
      const prevOn = this.props.objectsLive[objectid] ? this.props.objectsLive[objectid].on : null;
      if (prevOn !== liveData.on) {
        this.ifr.contentWindow.postMessage({ event: 'onoff', object: objectid, value: liveData.on }, '*');
      }
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleFrameTasks);
  }

  sendToFrame(data) {
    if(this.ifr) this.ifr.contentWindow.postMessage(data, '*');
  }

  handleFrameTasks = (e) => {
    if (e.data.type === 'bookmark') {
      this.sendToFrame({ event: 'bookmark', data: window.location.hash ? window.location.hash.substr(1) : null });
    }
  } */

  render() {
    return (
      <div>
        <iframe
          sandbox="allow-scripts"
          style={{ width: '100%', height: '100vh'}}
          src="https://ifundraise.nami.org/index.cfm?fuseaction=donateSimple.participant&isEmbedded=1&donRef=http%3A%2F%2Fifundraise.nami.org%2FddTest.html&palette=dark&participantID=1523"
          ref={(f) => { this.ifr = f; }}
        />
      </div>
    );
  }
}

export default DonateForm;

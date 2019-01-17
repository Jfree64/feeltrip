import React, { Component } from 'react';

import axios from 'axios';

export default class Progress extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://ifundraise.nami.org/api/participants/1523`)
      .then(res => {
        const progress = res.data;
        this.setState({ progress });
        console.log('progress');
      })
  }

  render() {
      return (
        <progress className="progress is-large" value="50" max="100">15%</progress>
      )
  }
}

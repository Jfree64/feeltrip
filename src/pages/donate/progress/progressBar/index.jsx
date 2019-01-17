import React, { Component } from 'react';

import './index.scss';

export default class ProgressBar extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
    }
    this.id = setInterval(this.countUp, .1);
    let progress = 0
  }

  componentDidMount() {
    console.log(this.id)
  }

  countUp = () => {
    let raised = this.props.raised;
    let progress = this.state.progress;
    let id = this.id;

    console.log(`CountUp Ran!!!`)
    if (progress >= raised) {
      clearInterval(id);
      console.log(`Stopped!!! ${progress}`)

    } else {
      progress++;
      this.setState({ progress });
      console.log(`Up one!!! ${progress}`)
    }
  }

  render() {
    return(
      <div className="progressBar is-four-fifths-mobile is-two-thirds-tablet">
        <progress className="progress is-large" value={this.state.progress} max={this.props.goal}>{this.props.goal}%</progress>
        <div className="range columns is-flex">
          <div className="range-low column is-size-6">$0</div>
          <div className="range-high column is-size-6">${this.props.goal}</div>
        </div>
      </div>
    )

  }
}

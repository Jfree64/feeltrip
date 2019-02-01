import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

import './index.scss';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raised: 0
    }
    console.log(props);
  }

  componentDidMount() {
    console.log(this.props);
    let raised = this.props.raised;
    this.setState({ raised });
  }

  componentDidUpdate() {
  }


  render() {
    return(
      <div className="progressBar is-four-fifths-mobile is-two-thirds-tablet">
      <Motion defaultStyle={{x: 0}} style={{x: spring(this.state.raised)}}>
        {value => <progress className="progress is-large" value={value.x} max={this.props.goal}>{this.props.goal}%</progress>}
        </Motion>
        <div className="range columns is-flex">
          <div className="range-low column is-size-6">$0</div>
          <div className="range-high column is-size-6">${this.props.goal}</div>
        </div>
      </div>
    )

  }
}

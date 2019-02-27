import React, { Component } from 'react';
import ProgressBar from './progressBar'
import {Motion, spring} from 'react-motion';

import axios from 'axios';

import './index.scss';

export default class Progress extends Component {
  constructor() {
    super();

    this.state = {
      raised: 1100,
      goal: 30000
    }

    axios.get(`http://ifundraise.nami.org/api/participants/1523`)
    .then(res => {
      const raised = res.data.sumDonations;
      const goal = res.data.fundraisingGoal;
      this.setState({ raised, goal });
      console.log("yo, its up to date!")
      console.log(res.data.fundraisingGoal)
    })
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="progress-section has-text-centered">
        <h2 class="subtitle is-size-2">Fundraising Status</h2>
        <ProgressBar raised={this.state.raised} goal={this.state.goal}/>
        <div class="caption is-size-5"> Total raised to date </div>
        <Motion defaultStyle={{x: 0, y: 0}} style={{x: spring(this.state.raised)}}>
          {value =>
            <div>
              <h2 class="subtitle is-size-1 funds-raised">${this.state.raised}</h2>
              <div class="caption is-size-5"> {Math.floor(this.state.raised / this.state.goal * 100)}% of goal </div>
            </div>
          }
          </Motion>
      </div>
    );
  }
}

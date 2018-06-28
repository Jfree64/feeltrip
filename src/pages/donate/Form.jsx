import React, { Component } from 'react';

class Form extends Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://ifundraise.nami.org/resources/js/donordrive.donate.js');
    script.addEventListener('load', () => {
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <div id="apply_form">
          <a name="form" id="formAnchor"></a>
        </div>
      </div>
    );
  }
}

export default Form

import React, {Component} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const SubscribeForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

return (
  <div className='container is-centered' id='subscribe'>
    <h2 className='subtitle has-text-centered has-text-dark'>
      <span className="line">interested in </span>
      <span className="line">hearing more?</span>
    </h2>
    <h2 className='has-text-dark'>Your Email</h2>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="field has-addons flex-middle is-fullwidth">
        <div className="control">
          <input
          className="input"
          ref={node => (email = node)}
          type="email"
          placeholder="you@feeltrip.us"
          />
        </div>
        <div className="control">
          <button
          id='subscribeButton'
          className="button"
          onClick={submit}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};




class Subscribe extends Component {
  render() {
    const url = "//feeltrip.us18.list-manage.com/subscribe/post?u=e6b85968d1050879c0472e76f&amp;id=9ee0411cac"
    return (
      <section id='subscribeSection' className='is-centered has-background-white has-text-dark'>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <SubscribeForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </section>
    );
  }
}

export default Subscribe

import React from 'react';
import {Helmet} from "react-helmet";

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>feel trip</title>
    <link rel="canonical" href="http://feeltrip.us/" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff2a93" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:type" content={props.type} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.desc} />
    <meta property="og:image" content={ogImg} />
  </Helmet>
)

export default Head

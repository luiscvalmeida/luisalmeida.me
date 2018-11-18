import React from 'react';
import Head from 'next/head';
import 'minireset.css';

const Main = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Luís - Frontend Engineer</title>
      <link rel="icon" href="/static/favicon.ico" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129318827-1" />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'UA-129318827-1');
          `,
      }}
      />
    </Head>
    <p>yo!</p>
  </>
);

export default Main;

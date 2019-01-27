import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding: 20px;

  a {
    color: #ff6f61;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 520px;

  > img {
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) and (orientation: portrait) {
      width: 100px;
      height: 100px;
    }
  }

  > h1 {
    font-size: 2.5em;
    font-weight: bold;
    margin: 20px 0;
  }

  > p {
    text-align: center;
    line-height: 1.4em;
    margin-bottom: 10px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  justify-content: space-around;
  font-size: 0.8em;

  > ul {
    padding: 20px 0;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 10px;
    }
  }
`;

export default () => (
  <>
    <Head>
      <title>Luís Almeida - Frontend Developer</title>
    </Head>
    <MainContainer>
      <InnerContainer>
        <picture>
          <source srcSet="/static/user.webp" type="image/webp" />
          <source srcSet="/static/user.png" type="image/png" />
          <img src="/static/user.png" alt="me" width={150} height={150} />
        </picture>
        <h1>Hello!</h1>
        <p>
          I&#39;m Luís Almeida, a frontend developer from Porto, Portugal, who
          loves to shape applications for the online world.
        </p>
        <p>
          I&#39;m still working on this website so for now feel free to
          {' '}
          <a href="/static/cv.pdf" target="_blank">
            check my CV
          </a>
        </p>
      </InnerContainer>
      <Footer>
        <ul>
          <li>
            <a
              href="https://github.com/luiscvalmeida"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luiscvalmeida/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/luiscvalmeida"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </Footer>
    </MainContainer>
  </>
);

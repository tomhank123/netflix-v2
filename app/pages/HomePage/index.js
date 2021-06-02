/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Faqs from 'components/Faqs';
import Features from 'components/Features';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Jumbotron from 'components/Jumbotron';
import React from 'react';
import { Helmet } from 'react-helmet';
import Wrapper from './Wrapper';

export default function HomePage() {
  return (
    <Wrapper>
      <Helmet>
        <title>
          Netflix Vietnam - Watch TV Shows Online, Watch Movies Online
        </title>
        <meta name="description" content="Description of SeriesHome" />
      </Helmet>
      <Header />
      <Jumbotron className="mt-3 pt-3 border-top" />
      <hr />
      <Features />
      <Faqs className="mt-3 pt-3 border-top" />
      <hr />
      <Footer />
    </Wrapper>
  );
}

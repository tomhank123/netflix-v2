/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'react-bootstrap/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Collections from 'components/Collections';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Netflix Clone</title>
        <meta name="description" content="Description of SeriesHome" />
      </Helmet>
      <Header />
      <Container>
        <Collections />
        <Footer />
      </Container>
    </div>
  );
}

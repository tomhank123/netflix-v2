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
import { Card } from 'react-bootstrap';
import OptForm from 'components/OptForm';

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
      <Header readonly />
      <hr />
      <Card body bg="secondary" className="text-light text-center">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <OptForm />
      </Card>
      <hr />
      <Card body bg="secondary" className="text-light text-left">
        <h2>Enjoy on your TV.</h2>
        <h4>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h4>
      </Card>
      <hr />
      <Card body bg="secondary" className="text-light text-right">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
      </Card>
      <hr />
      <Card body bg="secondary" className="text-light text-left">
        <h2>Download your shows to watch offline.</h2>
        <h4>Save your favorites easily and always have something to watch.</h4>
      </Card>
      <hr />
      <Card body bg="secondary" className="text-light text-right">
        <h2>Watch everywhere.</h2>
        <h4>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more
        </h4>
      </Card>
      <hr />
      <Card body bg="secondary" className="text-light text-left">
        <h2>Create profiles for kids.</h2>
        <h4>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </h4>
      </Card>
      <hr />
      <Card body bg="secondary" className="text-light text-center">
        <h2>Frequently Asked Questions</h2>
        <h4>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </h4>
        <OptForm />
      </Card>
      <hr />
      <Container>
        <Footer />
      </Container>
    </Wrapper>
  );
}

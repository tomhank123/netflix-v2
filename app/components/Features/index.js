/**
 *
 * Features
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Features() {
  return (
    <React.Fragment>
      <Card body bg="secondary" className="text-light rounded-0 text-left">
        <h2>Enjoy on your TV.</h2>
        <h4>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h4>
      </Card>
      <Card body bg="secondary" className="text-light rounded-0 text-right">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
      </Card>
      <Card body bg="secondary" className="text-light rounded-0 text-left">
        <h2>Download your shows to watch offline.</h2>
        <h4>Save your favorites easily and always have something to watch.</h4>
      </Card>
      <Card body bg="secondary" className="text-light rounded-0 text-right">
        <h2>Watch everywhere.</h2>
        <h4>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more
        </h4>
      </Card>
      <Card body bg="secondary" className="text-light rounded-0 text-left">
        <h2>Create profiles for kids.</h2>
        <h4>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </h4>
      </Card>
    </React.Fragment>
  );
}

Features.propTypes = {};

export default Features;

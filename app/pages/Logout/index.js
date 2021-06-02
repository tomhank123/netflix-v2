/**
 *
 * Logout
 *
 */

import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import Wrapper from './Wrapper';

export function Logout() {
  return (
    <Wrapper>
      <Helmet>
        <title>
          Netflix Vietnam - Watch TV Shows Online, Watch Movies Online
        </title>
        <meta
          name="description"
          content="Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
        />
      </Helmet>

      <div className="inner">
        <Header />
        <Card className="inner-card">
          <Card.Body>
            <h2>Leaving So Soon?</h2>
            <p>
              Just so you know, you don’t always need to sign out of Netflix.
              It’s only necessary if you’re on a shared or public computer.
            </p>
            <p>You’ll be redirected to the Netflix home page in 30 seconds.</p>
            <Button block as={Link} to="/" variant="info">
              Go Now
            </Button>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    </Wrapper>
  );
}

Logout.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Logout);

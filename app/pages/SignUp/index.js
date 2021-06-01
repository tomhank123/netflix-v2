/**
 *
 * SignUp
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import { Button, Card, Form } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisagree, setIsDisagree] = useState(false);

  return (
    <Wrapper>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Description of SignUp" />
      </Helmet>
      <div className="inner">
        <Header readonly />
        <Card className="inner-card">
          <Card.Body>
            <h2>Sign Up</h2>
            <Form>
              <Form.Group controlId="signInEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  placeholder="Add a email"
                  onChange={({ target }) => setEmail(target.value)}
                />
              </Form.Group>

              <Form.Group controlId="signInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Add a password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </Form.Group>
              <Form.Group controlId="signInRemember">
                <Form.Check
                  type="checkbox"
                  label="Please do not email me Netflix special offers"
                  checked={isDisagree}
                  onChange={({ target }) => setIsDisagree(target.checked)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    </Wrapper>
  );
}

SignUp.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SignUp);

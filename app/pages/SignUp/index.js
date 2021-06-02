/**
 *
 * SignUp
 *
 */

import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import { Button, Card, Form, Alert } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { FirebaseContext } from 'context/firebase';
import * as ROUTES from 'utils/routes';

import Wrapper from './Wrapper';

export function SignUp({ dispatch }) {
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisagree, setIsDisagree] = useState(false);
  const [error, setError] = useState('');

  const isInvalid = password === '' || email === '';

  const handleSignup = event => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result =>
        result.user
          .updateProfile({
            displayName: 'First Name',
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            dispatch(push(ROUTES.BROWSE));
          }),
      )
      .catch(({ message }) => {
        setError(message);
      });
  };

  useEffect(() => {
    setEmail('test123@gmail.com');
    setPassword('test123');
  }, []);

  return (
    <Wrapper>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Description of SignUp" />
      </Helmet>
      <div className="inner">
        <Header />
        <Card className="inner-card">
          <Card.Body>
            <h2>Sign Up</h2>

            {error && <Alert variant="warning">{error}</Alert>}

            <Form onSubmit={handleSignup} method="POST">
              <Form.Group controlId="signUpEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  placeholder="Add a email"
                  onChange={({ target }) => setEmail(target.value)}
                />
              </Form.Group>

              <Form.Group controlId="signUpPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Add a password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </Form.Group>
              <Form.Group controlId="signUpRemember">
                <Form.Check
                  type="checkbox"
                  label="Please do not email me Netflix special offers"
                  checked={isDisagree}
                  onChange={({ target }) => setIsDisagree(target.checked)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                block
                disabled={isInvalid}
              >
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
  dispatch: PropTypes.func.isRequired,
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

/**
 *
 * Login
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
import * as ROUTES from 'utils/routes';
import Wrapper from './Wrapper';

export function Login() {
  const [indentify, setIndentify] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  return (
    <Wrapper>
      <Helmet>
        <title>Netflix</title>
        <meta name="description" content="Description of Login" />
      </Helmet>

      <div className="inner">
        <Header readonly />
        <Card className="inner-card">
          <Card.Body>
            <h2>Sign In</h2>
            <Form>
              <Form.Group controlId="signInEmail">
                <Form.Label>Email or phone number</Form.Label>
                <Form.Control
                  type="text"
                  value={indentify}
                  onChange={({ target }) => setIndentify(target.checked)}
                />
              </Form.Group>

              <Form.Group controlId="signInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </Form.Group>
              <Form.Group controlId="signInRemember">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={isRemember}
                  onChange={({ target }) => setIsRemember(target.checked)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Sign In
              </Button>
            </Form>
            <hr />
            <p>
              New to Netflix?
              <a href={ROUTES.SIGN_UP}> Sign up now.</a>
            </p>
            <p>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
              <a href={ROUTES.HOME}> Learn more.</a>
            </p>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    </Wrapper>
  );
}

Login.propTypes = {
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

export default compose(withConnect)(Login);

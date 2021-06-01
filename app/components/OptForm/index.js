/**
 *
 * OptForm
 *
 */

import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function OptForm({ onGetStarted }) {
  const [email, setEmail] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onGetStarted(email);
  };
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-0">
          <Form.Label>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Form.Label>
          <InputGroup size="lg">
            <Form.Control
              placeholder="Email address"
              aria-label="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Button variant="primary" type="submit">
              Get Started
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </Wrapper>
  );
}

OptForm.propTypes = {
  onGetStarted: PropTypes.func,
};

export default OptForm;

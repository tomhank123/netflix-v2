/**
 *
 * OptForm
 *
 */

import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Wrapper from './Wrapper';

function OptForm() {
  return (
    <Wrapper>
      <Form>
        <Form.Group className="mb-0">
          <Form.Label>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Form.Label>
          <InputGroup size="lg">
            <Form.Control
              placeholder="Email address"
              aria-label="Email address"
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

OptForm.propTypes = {};

export default OptForm;

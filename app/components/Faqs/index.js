/**
 *
 * Faqs
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import OptForm from 'components/OptForm';
import { Card } from 'react-bootstrap';
import Wrapper from './Wrapper';

function Faqs({ ...restProps }) {
  return (
    <Wrapper {...restProps}>
      <Card body bg="secondary" className="text-light text-center rounded-0">
        <h2>Frequently Asked Questions</h2>
        <h4>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </h4>
        <OptForm />
      </Card>
    </Wrapper>
  );
}

Faqs.propTypes = {};

export default Faqs;

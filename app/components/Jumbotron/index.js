/**
 *
 * Jumbotron
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import OptForm from 'components/OptForm';
import Wrapper from './Wrapper';

function Jumbotron({ ...restProps }) {
  return (
    <Wrapper {...restProps}>
      <Card body bg="secondary" className="text-light text-center rounded-0">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <OptForm onGetStarted={() => {}} />
      </Card>
    </Wrapper>
  );
}

Jumbotron.propTypes = {};

export default Jumbotron;

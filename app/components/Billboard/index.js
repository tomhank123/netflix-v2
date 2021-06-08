/**
 *
 * Billboard
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import backdropImg from 'images/backdrop.png';
import Backdrop from './Backdrop';
import Titles from './Titles';
import Wrapper from './Wrapper';

function Billboard({ item }) {
  return item ? (
    <Wrapper>
      <Image src={backdropImg} alt="backdrop" fluid />
      <Backdrop>
        <Container fluid>
          <Titles />
          <div className="ml-auto">
            <Button size="sm" variant="outline-light" className="mr-2">
              Mute
            </Button>
            <Button size="sm" variant="outline-light">
              18+
            </Button>
          </div>
        </Container>
      </Backdrop>
    </Wrapper>
  ) : null;
}

Billboard.propTypes = {
  item: PropTypes.object,
};

export default Billboard;

/**
 *
 * Billboard
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Container, Image, Alert } from 'react-bootstrap';
import backdropImg from 'images/backdrop.png';
import Backdrop from './Backdrop';
import Titles from './Titles';
import Wrapper from './Wrapper';

function Billboard({ item, error, loading }) {
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <Alert variant="warning">{error}</Alert>;
  }

  if (item) {
    const prefixPath = 'https://www.themoviedb.org/t/p/w1280_and_h720_bestv2';
    const backdrop = item.backdrop_path
      ? `${prefixPath}/${item.backdrop_path}`
      : backdropImg;

    return (
      <Wrapper>
        <Image src={backdrop} alt="backdrop" fluid />
        <Backdrop>
          <Container fluid>
            <Titles item={item} />
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
    );
  }

  return null;
}

Billboard.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default Billboard;

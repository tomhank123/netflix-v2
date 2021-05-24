/**
 *
 * Movie
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Movie() {
  return (
    <Card body bg="secondary" className="text-center">
      <Link to="/episodes" className="text-light">
        Movie Item
      </Link>
    </Card>
  );
}

Movie.propTypes = {};

export default Movie;

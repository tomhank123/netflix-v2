/**
 *
 * Movie
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Movie() {
  return <Link to="/episodes">Episode</Link>;
}

Movie.propTypes = {};

export default Movie;

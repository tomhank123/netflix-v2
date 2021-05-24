/**
 *
 * Movie
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { getPoster } from './helpers';

function Movie({ item }) {
  return (
    <Card className="border-0">
      <Link to="/episodes" className="text-light">
        <img
          className="mw-100"
          src={getPoster(item.poster_path)}
          alt={item.title}
        />
      </Link>
    </Card>
  );
}

Movie.propTypes = {
  item: PropTypes.object,
};

export default Movie;

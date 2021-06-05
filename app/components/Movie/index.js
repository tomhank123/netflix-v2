/**
 *
 * Movie
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as ROUTES from 'utils/routes';

import Wrapper from './Wrapper';

function Movie({ item }) {
  const poster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${
    item.poster_path
  }`;
  const url = `${ROUTES.WATCH}?id=${item.id}`;
  const title = item.title || item.name;

  return (
    <Wrapper>
      <Link to={url} className="text-light">
        <img src={poster} alt={title} className="mw-100" />
      </Link>
    </Wrapper>
  );
}

Movie.propTypes = {
  item: PropTypes.object,
};

export default Movie;

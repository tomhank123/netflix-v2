/**
 *
 * Movie
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as ROUTES from 'utils/routes';

import Box from 'components/Box';

function Movie({ item }) {
  return (
    <Box style={{ height: 130 }}>
      <Link to={`${ROUTES.WATCH}?id=${item.id}`} className="text-light">
        {item.title}
      </Link>
    </Box>
  );
}

Movie.propTypes = {
  item: PropTypes.object,
};

export default Movie;

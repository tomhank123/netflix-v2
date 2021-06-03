/**
 *
 * SelectGenres
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import Wrapper from './Wrapper';

function SelectGenres({ genreId, parentId, onSelectedGenre, onGetGenreInfo }) {
  const { isMovies } = onGetGenreInfo(parentId, genreId);
  return (
    <Wrapper>
      {isMovies ? <h2>Movies</h2> : <h2>TV Shows</h2>}

      <Form inline>
        <select className="form-control" onChange={onSelectedGenre}>
          <option value={`/browse/genre/${parentId || genreId}`}>Gerne</option>
          <option value={`/browse/genre/811?bc=${parentId || genreId}`}>
            Actions
          </option>
          <option value={`/browse/genre/812?bc=${parentId || genreId}`}>
            Adventure
          </option>
          <option value={`/browse/genre/813?bc=${parentId || genreId}`}>
            Three
          </option>
        </select>
      </Form>
    </Wrapper>
  );
}

SelectGenres.propTypes = {
  genreId: PropTypes.number,
  parentId: PropTypes.number,
  onSelectedGenre: PropTypes.func,
  onGetGenreInfo: PropTypes.func,
};

export default SelectGenres;

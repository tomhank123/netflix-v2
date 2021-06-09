/**
 *
 * SelectGenres
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Form, Alert } from 'react-bootstrap';
import Wrapper from './Wrapper';

function SelectGenres({
  genreId,
  parentId,
  onSelectedGenre,
  onGetGenreInfo,
  items,
  error,
  loading,
}) {
  const { isMovies } = onGetGenreInfo(parentId, genreId);
  const [selectedGenre, setSelectedGenre] = useState(genreId);

  useEffect(() => {
    const url = [83, 34399].includes(selectedGenre)
      ? `/browse/genre/${parentId || genreId}`
      : `/browse/genre/${selectedGenre}?bc=${parentId || genreId}`;

    onSelectedGenre(url);
  }, [selectedGenre]);

  if (loading) {
    return <Skeleton height={50} />;
  }

  if (error) {
    return <Alert variant="warning">{error}</Alert>;
  }

  if (items) {
    return (
      <Wrapper>
        {isMovies ? <h2>Movies</h2> : <h2>TV Shows</h2>}

        <Form inline>
          <select
            className="form-control form-control-sm"
            value={selectedGenre}
            onChange={({ target }) => setSelectedGenre(target.value)}
          >
            <option value={parentId || genreId}>Gerne</option>
            {items.map(({ id, name }) => (
              <option key={id} data-momo={genreId} value={id}>
                {name}
              </option>
            ))}
          </select>
        </Form>
      </Wrapper>
    );
  }

  return null;
}

SelectGenres.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
  genreId: PropTypes.number,
  parentId: PropTypes.number,
  onSelectedGenre: PropTypes.func,
  onGetGenreInfo: PropTypes.func,
};

export default SelectGenres;

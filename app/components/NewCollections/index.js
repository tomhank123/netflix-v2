/**
 *
 * NewCollections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import NewMovie from 'components/NewMovie';
import Billboard from 'components/Billboard';

import { getCollections } from './helpers';

import MovieList from './MovieList';
import Wrapper from './Wrapper';

function NewCollections({ collections }) {
  const [billboard, filteredColls] = getCollections(collections);

  return (
    <Wrapper>
      <Billboard item={billboard} />

      {filteredColls &&
        filteredColls.map(({ id, title, data }) => (
          <React.Fragment key={id}>
            <hr />
            <h4>{title}</h4>
            <MovieList>
              {data &&
                data.map(movie => <NewMovie key={movie.id} item={movie} />)}
            </MovieList>
          </React.Fragment>
        ))}
    </Wrapper>
  );
}

NewCollections.propTypes = {
  collections: PropTypes.array,
};

export default NewCollections;

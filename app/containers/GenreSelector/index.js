/**
 *
 * GenreSelector
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Form } from 'react-bootstrap';
import { makeSelectLocation } from 'containers/App/selectors';

import { getGenreInfo, getUrlParams } from './helpers';
import Wrapper from './Wrapper';
import makeSelectSelectGenres from './selectors';
import reducer from './reducer';
import saga from './saga';

export function GenreSelector({ dispatch, location }) {
  useInjectReducer({ key: 'selectGenres', reducer });
  useInjectSaga({ key: 'selectGenres', saga });

  const { genreId, parentId } = getUrlParams(location);
  const { isMovies, isSeries } = getGenreInfo(parentId, genreId);

  const onSelectedGenre = ({ target }) => {
    dispatch(push(target.value));
  };

  return (
    <Wrapper>
      {isMovies && <h2>Movies</h2>}
      {isSeries && <h2>TV Shows</h2>}

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

GenreSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectGenres: makeSelectSelectGenres(),
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GenreSelector);

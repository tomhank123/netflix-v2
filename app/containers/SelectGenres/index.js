/**
 *
 * SelectGenres
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
import { getGenreInfo } from 'utils/helpers';

import Wrapper from './Wrapper';
import makeSelectSelectGenres from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SelectGenres({ genreId, parentId, dispatch }) {
  useInjectReducer({ key: 'selectGenres', reducer });
  useInjectSaga({ key: 'selectGenres', saga });
  const { isMovies, isSeries } = getGenreInfo(parentId, genreId);

  const onSelectGenre = ({ target }) => {
    dispatch(push(target.value));
  };

  return (
    <Wrapper>
      {isMovies && <h2>Movies</h2>}
      {isSeries && <h2>TV Shows</h2>}

      <Form inline className="d-none d-lg-block">
        <select className="form-control" onChange={onSelectGenre}>
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectGenres: makeSelectSelectGenres(),
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

export default compose(withConnect)(SelectGenres);

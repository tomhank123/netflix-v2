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

import Wrapper from './Wrapper';
import makeSelectSelectGenres from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SelectGenres({ genreId, dispatch }) {
  useInjectReducer({ key: 'selectGenres', reducer });
  useInjectSaga({ key: 'selectGenres', saga });

  const onSelectGenre = ({ target }) => {
    dispatch(push(target.value));
  };

  return (
    <Wrapper>
      {genreId === 34399 && <h2>Movies {genreId}</h2>}
      {genreId === 83 && <h2>TV Shows {genreId}</h2>}
      {[34399, 83].every(id => id !== genreId) && <h2>Genres {genreId}</h2>}

      <Form inline className="d-none d-lg-block">
        <select className="form-control" onChange={onSelectGenre}>
          <option value="/browse/genre/83">Gerne</option>
          <option value="/browse/genre/811?bc=83">Actions</option>
          <option value="/browse/genre/812?bc=83">Adventure</option>
          <option value="/browse/genre/813?bc=83">Three</option>
        </select>
      </Form>
    </Wrapper>
  );
}

SelectGenres.propTypes = {
  genreId: PropTypes.number,
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

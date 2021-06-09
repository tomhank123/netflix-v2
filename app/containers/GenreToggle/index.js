/**
 *
 * GenreToggle
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGenreToggle from './selectors';
import reducer from './reducer';
import saga from './saga';

export function GenreToggle() {
  useInjectReducer({ key: 'genreToggle', reducer });
  useInjectSaga({ key: 'genreToggle', saga });

  return (
    <div>
      <h1>Genre Toggle</h1>
    </div>
  );
}

GenreToggle.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  genreToggle: makeSelectGenreToggle(),
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

export default compose(withConnect)(GenreToggle);

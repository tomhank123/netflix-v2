/**
 *
 * BrowseGenre
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectLocation } from 'containers/App/selectors';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container } from 'react-bootstrap';

import Box from 'components/Box';
import makeSelectBrowseGenre from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BrowseGenre({ location }) {
  useInjectReducer({ key: 'browseGenre', reducer });
  useInjectSaga({ key: 'browseGenre', saga });

  const path = location.pathname || '';
  const genreId = +path.split('/')[3];

  // eslint-disable-next-line no-nested-ternary
  return genreId === 34399 ? (
    <Container>
      <Box>Movies</Box>
    </Container>
  ) : genreId === 83 ? (
    <Container>
      <Box>TV Shows</Box>
    </Container>
  ) : (
    <Container>
      <Box>Genre</Box>
    </Container>
  );
}

BrowseGenre.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  browseGenre: makeSelectBrowseGenre(),
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

export default compose(withConnect)(BrowseGenre);

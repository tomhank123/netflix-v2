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
import { matchPath } from 'react-router';

import { makeSelectLocation } from 'containers/App/selectors';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container } from 'react-bootstrap';
import collectionsData from 'fixtures/collections';

import Header from 'components/Header';
import Footer from 'components/Footer';
import NewCollections from 'components/NewCollections';

import makeSelectBrowseGenre from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BrowseGenre({ location }) {
  useInjectReducer({ key: 'browseGenre', reducer });
  useInjectSaga({ key: 'browseGenre', saga });

  const match = matchPath(location.pathname, {
    path: '/browse/genre/:genreId',
    exact: true,
    strict: true,
  });
  const genreId = match ? +match.params.genreId : null;

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        {genreId === 34399 && <h2>Movies {genreId}</h2>}
        {genreId === 83 && <h2>TV Shows {genreId}</h2>}
        {[34399, 83].every(id => id !== genreId) && <h2>Genres {genreId}</h2>}
        <NewCollections isSwiper collections={collectionsData} />
        <Footer />
      </Container>
    </React.Fragment>
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

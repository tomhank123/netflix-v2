/**
 *
 * BrowseGenre
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { compose } from 'redux';
import { Container } from 'react-bootstrap';
import collectionsData from 'fixtures/collections';

import { makeSelectLocation } from 'containers/App/selectors';
import SelectGenresContainer from 'containers/SelectGenres';
import NewCollections from 'components/NewCollections';
import Header from 'components/Header';
import Footer from 'components/Footer';

import reducer from './reducer';
import saga from './saga';
import { getGenreId } from './helpers';

export function BrowseGenre({ location }) {
  useInjectReducer({ key: 'browseGenre', reducer });
  useInjectSaga({ key: 'browseGenre', saga });

  const genreId = getGenreId(location);

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <SelectGenresContainer genreId={genreId} />
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

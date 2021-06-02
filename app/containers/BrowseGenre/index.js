/**
 *
 * BrowseGenre
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { compose } from 'redux';
import { Container } from 'react-bootstrap';
import collectionsData from 'fixtures/collections';

import GenreSelector from 'containers/GenreSelector';
import Collections from 'components/Collections';
import Header from 'components/Header';
import Footer from 'components/Footer';

import reducer from './reducer';
import saga from './saga';

export function BrowseGenre() {
  useInjectReducer({ key: 'browseGenre', reducer });
  useInjectSaga({ key: 'browseGenre', saga });

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <GenreSelector />
        <Collections
          isSwiper
          loading={false}
          error={false}
          items={collectionsData}
        />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

BrowseGenre.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(BrowseGenre);

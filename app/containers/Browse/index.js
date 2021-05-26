/**
 *
 * Browse
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import collectionsData from 'fixtures/collections';

import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NewCollections from 'components/NewCollections';

import makeSelectBrowse from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Browse() {
  useInjectReducer({ key: 'browse', reducer });
  useInjectSaga({ key: 'browse', saga });

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <NewCollections collections={collectionsData} />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

Browse.propTypes = {};

const mapStateToProps = createStructuredSelector({
  browse: makeSelectBrowse(),
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

export default compose(withConnect)(Browse);

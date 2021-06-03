/**
 *
 * BrowseMyList
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Collections from 'components/Collections';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'react-bootstrap';

import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BrowseMyList({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'myList', reducer });
  useInjectSaga({ key: 'myList', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Collections {...collections} />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

BrowseMyList.propTypes = {
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.collections.request;
  return bindActionCreators({ onLoadCollections }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BrowseMyList);

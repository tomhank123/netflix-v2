/**
 *
 * Latest
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Container } from 'react-bootstrap';
import Billboard from 'containers/Billboard';
import Collections from 'components/Collections';
import Header from 'components/Header';
import Footer from 'components/Footer';

import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Latest({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'latest', reducer });
  useInjectSaga({ key: 'latest', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

  return (
    <React.Fragment>
      <Header fixed />
      <Billboard />
      <Container fluid>
        <Collections isSwiper {...collections} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

Latest.propTypes = {
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

export default compose(withConnect)(Latest);

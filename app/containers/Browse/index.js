/**
 *
 * Browse
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
import Header from 'components/Header';
import Footer from 'components/Footer';
import Collections from 'components/Collections';
import Billboard from 'components/Billboard';

import * as actions from './actions';
import { makeSelectCollections, makeSelectBillboard } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Browse({
  collections,
  billboard,
  onLoadCollections,
  onLoadBillboard,
}) {
  useInjectReducer({ key: 'browse', reducer });
  useInjectSaga({ key: 'browse', saga });

  useEffect(() => {
    onLoadBillboard();
    onLoadCollections();
  }, []);

  return (
    <React.Fragment>
      <Header fixed />
      <Billboard {...billboard} />
      <Container fluid>
        <Collections isSwiper {...collections} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

Browse.propTypes = {
  billboard: PropTypes.object,
  collections: PropTypes.object,
  onLoadBillboard: PropTypes.func,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
  billboard: makeSelectBillboard(),
});

function mapDispatchToProps(dispatch) {
  const onLoadBillboard = actions.billboard.request;
  const onLoadCollections = actions.collections.request;

  return {
    ...bindActionCreators({ onLoadCollections, onLoadBillboard }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Browse);

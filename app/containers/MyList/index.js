/**
 *
 * MyList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { singleCollection } from 'fixtures/collections';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import NewCollections from 'components/NewCollections';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'react-bootstrap';

import makeSelectMyList from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MyList() {
  useInjectReducer({ key: 'myList', reducer });
  useInjectSaga({ key: 'myList', saga });

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <NewCollections collections={singleCollection} />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

MyList.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myList: makeSelectMyList(),
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

export default compose(withConnect)(MyList);

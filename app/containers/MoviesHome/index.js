/**
 *
 * MoviesHome
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Collections from 'components/Collections';
import Genres from 'containers/Genres';
import Container from 'react-bootstrap/Container';

import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MoviesHome({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'moviesHome', reducer });
  useInjectSaga({ key: 'moviesHome', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Movies Home</title>
        <meta name="description" content="Description of MoviesHome" />
      </Helmet>
      <Header />
      <Container>
        <Genres />
        <Collections collections={collections.items} />
        <Footer />
      </Container>
    </div>
  );
}

MoviesHome.propTypes = {
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

export default compose(withConnect)(MoviesHome);

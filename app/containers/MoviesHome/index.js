/**
 *
 * MoviesHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Collections from 'components/Collections';
import Genres from 'containers/Genres';
import Container from 'react-bootstrap/Container';

import makeSelectMoviesHome from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MoviesHome() {
  useInjectReducer({ key: 'moviesHome', reducer });
  useInjectSaga({ key: 'moviesHome', saga });

  return (
    <div>
      <Helmet>
        <title>Movies Home</title>
        <meta name="description" content="Description of MoviesHome" />
      </Helmet>
      <Header />
      <Container>
        <Genres />
        <Collections />
        <Footer />
      </Container>
    </div>
  );
}

MoviesHome.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  moviesHome: makeSelectMoviesHome(),
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

export default compose(withConnect)(MoviesHome);

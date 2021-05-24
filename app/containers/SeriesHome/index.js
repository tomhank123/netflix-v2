/**
 *
 * SeriesHome
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

import Container from 'react-bootstrap/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Collections from 'components/Collections';
import Genres from 'containers/Genres';

import makeSelectSeriesHome from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SeriesHome() {
  useInjectReducer({ key: 'seriesHome', reducer });
  useInjectSaga({ key: 'seriesHome', saga });

  return (
    <div>
      <Helmet>
        <title>Series Home</title>
        <meta name="description" content="Description of SeriesHome" />
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

SeriesHome.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  seriesHome: makeSelectSeriesHome(),
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

export default compose(withConnect)(SeriesHome);

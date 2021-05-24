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
        <title>SeriesHome</title>
        <meta name="description" content="Description of SeriesHome" />
      </Helmet>
      <h1>Series Home</h1>
      <Header />
      <Genres />
      <Collections />
      <Footer />
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

/**
 *
 * Watch
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import Box from 'components/Box';
import Header from 'components/Header';
import Footer from 'components/Footer';

export function Watch() {
  return (
    <div>
      <Helmet>
        <title>Watch</title>
        <meta name="description" content="Description of Watch" />
      </Helmet>

      <Header />
      <hr />
      <Box>Collections</Box>
      <hr />
      <Footer />
    </div>
  );
}

Watch.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Watch);

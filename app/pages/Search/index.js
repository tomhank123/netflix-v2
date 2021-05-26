/**
 *
 * Search
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

export function Search() {
  return (
    <div>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Description of Search" />
      </Helmet>

      <Header />
      <hr />
      <Box>Collections</Box>
      <hr />
      <Footer />
    </div>
  );
}

Search.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Search);

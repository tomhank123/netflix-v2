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

export function Search() {
  return (
    <div>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Description of Search" />
      </Helmet>
      <h1>Search Page</h1>
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

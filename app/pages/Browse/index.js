/**
 *
 * Browse
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

export function Browse() {
  return (
    <div>
      <Helmet>
        <title>Browse</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>

      <h1>Browse Page</h1>
    </div>
  );
}

Browse.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Browse);

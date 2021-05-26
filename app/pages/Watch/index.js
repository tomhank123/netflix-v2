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

export function Watch() {
  return (
    <div>
      <Helmet>
        <title>Watch</title>
        <meta name="description" content="Description of Watch" />
      </Helmet>
      <h1>Watch Page</h1>
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

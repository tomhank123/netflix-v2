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

import BrowseContainer from 'containers/Browse';

export function Browse() {
  return (
    <div>
      <Helmet>
        <title>Netflix</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>

      <BrowseContainer />
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

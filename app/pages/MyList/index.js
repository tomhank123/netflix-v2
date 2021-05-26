/**
 *
 * MyList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

export function MyList() {
  return (
    <div>
      <Helmet>
        <title>MyList</title>
        <meta name="description" content="Description of MyList" />
      </Helmet>
      <h1>My List Page</h1>
    </div>
  );
}

MyList.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(MyList);

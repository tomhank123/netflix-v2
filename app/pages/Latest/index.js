/**
 *
 * Latest
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import ProfileSelector from 'containers/ProfileSelector';
import LatestContainer from 'containers/Latest';

export function Latest() {
  return (
    <div>
      <Helmet>
        <title>Latest</title>
        <meta name="description" content="Description of Latest" />
      </Helmet>

      <ProfileSelector>
        <LatestContainer />
      </ProfileSelector>
    </div>
  );
}

Latest.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Latest);

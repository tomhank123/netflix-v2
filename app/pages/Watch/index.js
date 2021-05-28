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

import ProfileSelector from 'containers/ProfileSelector';
import Box from 'components/Box';

export function Watch() {
  return (
    <div>
      <Helmet>
        <title>Watch</title>
        <meta name="description" content="Description of Watch" />
      </Helmet>

      <ProfileSelector>
        <Box>Player</Box>
      </ProfileSelector>
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

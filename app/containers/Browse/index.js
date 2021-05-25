/**
 *
 * Browse
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Profiles from 'containers/Profiles';
import makeSelectBrowse from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Browse() {
  useInjectReducer({ key: 'browse', reducer });
  useInjectSaga({ key: 'browse', saga });

  const [profile, setProfile] = useState({});

  return (
    <div>
      <Helmet>
        <title>Browse</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>

      {profile.displayName ? (
        <p>Browse</p>
      ) : (
        <Profiles setProfile={setProfile} />
      )}
    </div>
  );
}

Browse.propTypes = {};

const mapStateToProps = createStructuredSelector({
  browse: makeSelectBrowse(),
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

export default compose(withConnect)(Browse);

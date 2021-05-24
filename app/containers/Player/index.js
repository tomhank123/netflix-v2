/**
 *
 * Player
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPlayer from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Player() {
  useInjectReducer({ key: 'player', reducer });
  useInjectSaga({ key: 'player', saga });

  return (
    <div>
      <Helmet>
        <title>Player</title>
        <meta name="description" content="Description of Player" />
      </Helmet>
      <h1>Player</h1>
    </div>
  );
}

Player.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  player: makeSelectPlayer(),
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

export default compose(withConnect)(Player);

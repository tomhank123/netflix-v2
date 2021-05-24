/**
 *
 * Episodes
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEpisodes from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Episodes() {
  useInjectReducer({ key: 'episodes', reducer });
  useInjectSaga({ key: 'episodes', saga });

  return (
    <div>
      <Helmet>
        <title>Episodes</title>
        <meta name="description" content="Description of Episodes" />
      </Helmet>
      <h1>Episodes</h1>
      <Link to="/player">Player</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed
        quaerat alias, ex assumenda atque, ducimus nisi eligendi eaque veniam
        aspernatur itaque reprehenderit accusamus nihil magni, quidem autem.
        Labore, repudiandae.
      </p>
    </div>
  );
}

Episodes.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  episodes: makeSelectEpisodes(),
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

export default compose(withConnect)(Episodes);

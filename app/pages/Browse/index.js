/**
 *
 * Browse
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import * as ROUTES from 'utils/routes';
import { makeSelectLocation } from 'containers/App/selectors';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SelectProfiles from 'containers/SelectProfiles';
import BrowseGenre from 'containers/BrowseGenre';
import BrowseContainer from 'containers/Browse';

export function Browse({ location }) {
  const path = location.pathname || '';
  // eslint-disable-next-line no-console
  console.log(path);

  return (
    <div>
      <Helmet>
        <title>Netflix</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>

      <Switch>
        <Route exact path={ROUTES.BROWSE}>
          <SelectProfiles>
            <BrowseContainer />
          </SelectProfiles>
        </Route>
        <Route path={`${ROUTES.BROWSE}/genre/:topicId`}>
          <SelectProfiles>
            <BrowseGenre />
          </SelectProfiles>
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

Browse.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
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

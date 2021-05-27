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
import { Switch, Route } from 'react-router-dom';

import SelectProfiles from 'containers/SelectProfiles';
import BrowseGenre from 'containers/BrowseGenre';
import BrowseContainer from 'containers/Browse';

export function Browse({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <div>
      <Helmet>
        <title>Netflix</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>

      <Switch>
        <Route exact path={match.path}>
          <SelectProfiles>
            <BrowseContainer />
          </SelectProfiles>
        </Route>
        <Route path={`${match.path}/genre/:genreId`}>
          <SelectProfiles>
            <BrowseGenre />
          </SelectProfiles>
        </Route>
      </Switch>
    </div>
  );
}

Browse.propTypes = {};

function mapDispatchToProps(/* dispatch */) {
  return {};
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Browse);

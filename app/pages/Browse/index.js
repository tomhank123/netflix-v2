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

import BrowseGenreContainer from 'containers/BrowseGenre';
import SelectProfiles from 'containers/SelectProfiles';
import MyListContainer from 'containers/MyList';
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
            <BrowseGenreContainer />
          </SelectProfiles>
        </Route>
        <Route path={`${match.path}/my-list`}>
          <SelectProfiles>
            <MyListContainer />
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

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
import BrowseMyListContainer from 'containers/BrowseMyList';
import BrowseContainer from 'containers/Browse';
import ProfileSelector from 'containers/ProfileSelector';

export function Browse({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <React.Fragment>
      <Helmet>
        <title>Netflix</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>

      <ProfileSelector>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <BrowseContainer {...routeProps} />}
          />
          <Route
            path={`${match.path}/genre/:genreId`}
            render={() => <BrowseGenreContainer {...routeProps} />}
          />
          <Route
            path={`${match.path}/my-list`}
            render={() => <BrowseMyListContainer {...routeProps} />}
          />
        </Switch>
      </ProfileSelector>
    </React.Fragment>
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

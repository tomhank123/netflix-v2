/**
 *
 * SearchRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import queryString from 'query-string';

const RedirectComponent = ({ location }) => (
  <Redirect
    to={{
      pathname: location.state ? location.state.pathname : 'browse',
    }}
  />
);

RedirectComponent.propTypes = {
  location: PropTypes.object,
};

function SearchRoute({ children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        const { search } = location;

        if (!search) {
          return <RedirectComponent location={location} />;
        }

        const queries = queryString.parse(search);
        const hasKey = queries.q;

        return hasKey ? children : <RedirectComponent location={location} />;
      }}
    />
  );
}

SearchRoute.propTypes = {
  children: PropTypes.node,
};

export default SearchRoute;

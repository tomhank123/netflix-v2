import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import queryString from 'query-string';

export const HOME = '/';
export const BROWSE = '/browse';
export const WATCH = '/watch';
export const LATEST = '/latest';
export const SEARCH = '/search';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

IsUserRedirect.propTypes = {
  user: PropTypes.object,
  loggedInPath: PropTypes.string,
  children: PropTypes.node,
};

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
};

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

export function SearchRoute({ children, ...restProps }) {
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

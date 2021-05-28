import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

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

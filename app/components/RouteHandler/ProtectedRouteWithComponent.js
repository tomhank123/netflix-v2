/**
 *
 * ProtectedRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import * as ROUTES from 'utils/routes';

function ProtectedRouteWithComponent({ user, component, ...restProps }) {
  const Component = component;
  return (
    <Route
      {...restProps}
      render={routeProps => {
        const { location } = routeProps;

        if (user) {
          return <Component {...routeProps} />;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.LOGIN,
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

ProtectedRouteWithComponent.propTypes = {
  user: PropTypes.object,
  // @TODO: React Node, type checking
  component: PropTypes.any,
};

export default ProtectedRouteWithComponent;

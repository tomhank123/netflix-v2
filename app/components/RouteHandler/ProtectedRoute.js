/**
 *
 * ProtectedRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import * as ROUTES from 'utils/routes';

function ProtectedRoute({ user, children, ...restProps }) {
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

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
};

export default ProtectedRoute;

/**
 *
 * RouteHandler
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import SearchRoute from './SearchRoute';
import IsUserRedirect from './IsUserRedirect';
import ProtectedRoute from './ProtectedRoute';
import ProtectedRouteWithComponent from './ProtectedRouteWithComponent';

function RouteHandler({ handler, ...restProps }) {
  switch (handler) {
    case 'IsUserRedirect':
      return <IsUserRedirect {...restProps} />;

    case 'ProtectedRoute':
      return <ProtectedRoute {...restProps} />;

    case 'ProtectedRouteWithComponent':
      return <ProtectedRouteWithComponent {...restProps} />;

    case 'SearchRoute':
      return <SearchRoute {...restProps} />;

    default:
      return null;
  }
}

RouteHandler.propTypes = {
  handler: PropTypes.oneOf([
    'IsUserRedirect',
    'ProtectedRoute',
    'SearchRoute',
    'ProtectedRouteWithComponent',
  ]),
};

export default RouteHandler;

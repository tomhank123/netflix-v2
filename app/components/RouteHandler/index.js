/**
 *
 * RouteHandler
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import IsUserRedirect from './IsUserRedirect';
import ProtectedRoute from './ProtectedRoute';
import SearchRoute from './SearchRoute';

function RouteHandler({ handler, ...restProps }) {
  switch (handler) {
    case 'IsUserRedirect':
      return <IsUserRedirect {...restProps} />;

    case 'ProtectedRoute':
      return <ProtectedRoute {...restProps} />;

    case 'SearchRoute':
      return <SearchRoute {...restProps} />;

    default:
      return null;
  }
}

RouteHandler.propTypes = {
  handler: PropTypes.oneOf(['IsUserRedirect', 'ProtectedRoute', 'SearchRoute']),
};

export default RouteHandler;

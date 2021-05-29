/**
 *
 * IsUserRedirect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
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

export default IsUserRedirect;

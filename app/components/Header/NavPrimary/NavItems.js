import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';
import * as ROUTES from 'utils/routes';

export default function NavItems({ component }) {
  const Component = component;

  return (
    <React.Fragment>
      <Component exact as={RouteLink} to={ROUTES.BROWSE}>
        Home
      </Component>
      <Component
        as={RouteLink}
        to={`${ROUTES.BROWSE}/genre/83`}
        isActive={(match, location) => match || location.search === '?bc=83'}
      >
        TV Shows
      </Component>
      <Component
        as={RouteLink}
        to={`${ROUTES.BROWSE}/genre/34399`}
        isActive={(match, location) => match || location.search === '?bc=34399'}
      >
        Movies
      </Component>
      <Component as={RouteLink} to={ROUTES.LATEST}>
        New & Popular
      </Component>
      <Component as={RouteLink} to={`${ROUTES.BROWSE}/my-list`}>
        My List
      </Component>
    </React.Fragment>
  );
}

NavItems.propTypes = {
  component: PropTypes.any,
};

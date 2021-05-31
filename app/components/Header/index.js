/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';
import { Nav, NavLink, Navbar } from 'react-bootstrap';

import * as ROUTES from 'utils/routes';
import SearchBarContainer from 'containers/SearchBar';

import Wrapper from './Wrapper';

function Header({ isFixed, readonly }) {
  return (
    <Wrapper>
      <Navbar
        bg="secondary"
        variant="dark"
        expand="sm"
        fixed={isFixed ? 'top' : null}
      >
        <Navbar.Brand as={RouteLink} to="/">
          <strong>
            <strong>
              <strong>NETFLIX LOGO</strong>
            </strong>
          </strong>
        </Navbar.Brand>
        {!readonly && (
          <React.Fragment>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="mr-auto">
                <NavLink exact as={RouteLink} to={ROUTES.BROWSE}>
                  Home
                </NavLink>
                <NavLink
                  as={RouteLink}
                  to={`${ROUTES.BROWSE}/genre/34399`}
                  isActive={(match, location) =>
                    match || location.search === '?bc=34399'
                  }
                >
                  Movies
                </NavLink>
                <NavLink
                  as={RouteLink}
                  to={`${ROUTES.BROWSE}/genre/83`}
                  isActive={(match, location) =>
                    match || location.search === '?bc=83'
                  }
                >
                  TV Shows
                </NavLink>
                <NavLink as={RouteLink} to={ROUTES.LATEST}>
                  New & Popular
                </NavLink>
                <NavLink as={RouteLink} to={`${ROUTES.BROWSE}/my-list`}>
                  My List
                </NavLink>
              </Nav>
              <SearchBarContainer />
            </Navbar.Collapse>
          </React.Fragment>
        )}
      </Navbar>
    </Wrapper>
  );
}

Header.propTypes = {
  isFixed: PropTypes.bool,
  readonly: PropTypes.bool,
};

export default Header;

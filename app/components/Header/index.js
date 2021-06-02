/**
 *
 * Header
 *
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';
import { Nav, NavLink, Navbar, Button } from 'react-bootstrap';

import SearchBarContainer from 'containers/SearchBar';
import * as ROUTES from 'utils/routes';
import { useAuthListener } from 'hooks';
import { FirebaseContext } from 'context/firebase';

import Wrapper from './Wrapper';

function Header({ isFixed }) {
  const { firebase } = useContext(FirebaseContext);
  const { user: loggedInUser } = useAuthListener();

  return (
    <Wrapper id="header">
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
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {loggedInUser && (
            <React.Fragment>
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
            </React.Fragment>
          )}

          {!loggedInUser ? (
            <Button
              className="ml-auto"
              exact
              as={RouteLink}
              to={ROUTES.LOGIN}
              activeClassName="d-none"
            >
              Sign In
            </Button>
          ) : (
            <Button className="ml-3" onClick={() => firebase.auth().signOut()}>
              Sign Out
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
}

Header.propTypes = {
  isFixed: PropTypes.bool,
};

export default Header;

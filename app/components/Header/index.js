/**
 *
 * Header
 *
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';
import { Nav, NavLink, Button } from 'react-bootstrap';

import SearchBarContainer from 'containers/SearchBar';
import * as ROUTES from 'utils/routes';
import { useAuthListener } from 'hooks';
import { FirebaseContext } from 'context/firebase';

import Wrapper from './Wrapper';
import Navbar from './Navbar';

function Header({ fixed }) {
  const { firebase } = useContext(FirebaseContext);
  const { user: loggedInUser } = useAuthListener();

  return (
    <Wrapper>
      <Navbar fixed={fixed ? 'top' : null}>
        <Navbar.Brand as={RouteLink} to="/">
          <strong>
            <strong>
              <strong className="text-danger h3">NETFLIX</strong>
            </strong>
          </strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {loggedInUser && (
            <React.Fragment>
              <Nav className="nav-primary mr-auto">
                <NavLink exact as={RouteLink} to={ROUTES.BROWSE}>
                  Home
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
                <NavLink
                  as={RouteLink}
                  to={`${ROUTES.BROWSE}/genre/34399`}
                  isActive={(match, location) =>
                    match || location.search === '?bc=34399'
                  }
                >
                  Movies
                </NavLink>
                <NavLink as={RouteLink} to={ROUTES.LATEST}>
                  New & Popular
                </NavLink>
                <NavLink as={RouteLink} to={`${ROUTES.BROWSE}/my-list`}>
                  My List
                </NavLink>
              </Nav>
              {false && <SearchBarContainer />}
              <Nav className="nav-secondary">
                <Nav.Link>Item</Nav.Link>
                <Nav.Link>Item</Nav.Link>
                <Nav.Link>Item</Nav.Link>
                <Nav.Link>Item</Nav.Link>
              </Nav>
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
            <Button
              className="ml-3 d-none"
              onClick={() => firebase.auth().signOut()}
            >
              Sign Out
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
}

Header.propTypes = {
  fixed: PropTypes.bool,
};

export default Header;

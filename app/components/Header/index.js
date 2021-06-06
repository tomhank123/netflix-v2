/**
 *
 * Header
 *
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Button,
  NavDropdown,
  Form,
  Alert,
} from 'react-bootstrap';
import { FaBell, FaSlidersH, FaSearch } from 'react-icons/fa';
import { BsPersonSquare } from 'react-icons/bs';

import SearchBarContainer from 'containers/SearchBar';
import * as ROUTES from 'utils/routes';
import { useAuthListener } from 'hooks';
import { FirebaseContext } from 'context/firebase';

import Wrapper from './Wrapper';
import Navbar from './Navbar';
import Dropdown from './Dropdown';

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
              <Nav className="nav-primary mr-auto align-items-center">
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
              <Nav className="nav-secondary align-items-center">
                <Nav.Link>
                  <FaSearch size="1.2rem" color="white" />
                  {false && <SearchBarContainer />}
                </Nav.Link>
                <Dropdown className="removecaret">
                  <Dropdown.Toggle>
                    <FaBell size="1.2rem" color="white" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="p-3">
                    <Alert variant="warning" className="mb-0">
                      Not available now!
                    </Alert>
                  </Dropdown.Menu>
                </Dropdown>
                <NavDropdown
                  title={<BsPersonSquare size="2rem" className="text-info" />}
                  id="collasible-nav-dropdown"
                  alignRight
                  menuvariant="dark"
                  className="removecaret"
                >
                  <NavDropdown.Item>
                    <BsPersonSquare size="2rem" className="text-danger mr-2" />
                    Profile Other
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <BsPersonSquare size="2rem" className="text-dark mr-2" />
                    Profile Other
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <BsPersonSquare size="2rem" className="text-success mr-2" />
                    Profile Other
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <BsPersonSquare size="2rem" className="text-warning mr-2" />
                    Profile Other
                  </NavDropdown.Item>
                  <NavDropdown.Item>Manage Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Account</NavDropdown.Item>
                  <NavDropdown.Item>Help Center</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => firebase.auth().signOut()}>
                    Sign out of Netflix
                  </NavDropdown.Item>
                </NavDropdown>
                <Dropdown>
                  <Dropdown.Toggle>
                    <FaSlidersH size="1.2rem" color="white" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="p-3">
                    <Form>
                      <Form.Check
                        type="switch"
                        id="title-detail-switch"
                        label="Title detail"
                      />
                      <Form.Text className="text-muted">
                        Summary, location and release year are not displayed
                      </Form.Text>
                    </Form>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </React.Fragment>
          )}

          {!loggedInUser && (
            <Button
              className="ml-auto"
              exact
              as={RouteLink}
              to={ROUTES.LOGIN}
              activeClassName="d-none"
            >
              Sign In
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

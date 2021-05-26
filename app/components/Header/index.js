/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';
import {
  Button,
  Form,
  FormControl,
  Nav,
  NavLink,
  Navbar,
} from 'react-bootstrap';

import * as ROUTES from 'utils/routes';
import Wrapper from './Wrapper';

function Header({ isFixed }) {
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
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <NavLink as={RouteLink} to={ROUTES.BROWSE}>
              Home
            </NavLink>
            <NavLink as={RouteLink} to={ROUTES.LATEST}>
              New & Popular
            </NavLink>
            <NavLink as={RouteLink} to={ROUTES.MY_LIST}>
              My List
            </NavLink>
            <NavLink as={RouteLink} to={ROUTES.SEARCH}>
              Search
            </NavLink>
          </Nav>
          <Form inline className="d-none d-lg-block">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
}

Header.propTypes = {
  isFixed: PropTypes.bool,
};

export default Header;

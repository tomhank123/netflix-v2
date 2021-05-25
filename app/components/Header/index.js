/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';

import * as ROUTES from 'utils/routes';
import Wrapper from './Wrapper';

function Header() {
  return (
    <Wrapper>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Navbar.Brand as={RouteLink} to="/">
          Netflix Clone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink as={RouteLink} to={ROUTES.HOME}>
              Home
            </NavLink>
            <NavLink as={RouteLink} to={ROUTES.SERIES}>
              TV Shows
            </NavLink>
            <NavLink as={RouteLink} to={ROUTES.MOVIES}>
              Movies
            </NavLink>
            <NavLink as={RouteLink} to={ROUTES.LATEST}>
              New & Popular
            </NavLink>
            <NavLink as={RouteLink} to={ROUTES.MY_LIST}>
              My List
            </NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;

/**
 *
 * NavSecondary
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FaBell, FaSlidersH, FaSearch } from 'react-icons/fa';
import SearchBarContainer from 'containers/SearchBar';
import { Nav, NavDropdown, Form, Alert, Image } from 'react-bootstrap';

import User1 from 'images/users/user1.png';
import User2 from 'images/users/user2.png';
import User3 from 'images/users/user3.png';
import User4 from 'images/users/user4.png';
import User5 from 'images/users/user5.png';
import Dropdown from '../Dropdown';

function NavSecondary({ onSignOut }) {
  return (
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
        title={<Image src={User1} height="35" className="rounded" />}
        id="collasible-nav-dropdown"
        alignRight
        menuvariant="dark"
      >
        <NavDropdown.Item>
          <Image src={User2} height="35" className="mr-2 rounded" />
          Profile Other
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Image src={User3} height="35" className="mr-2 rounded" />
          Profile Other
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Image src={User4} height="35" className="mr-2 rounded" />
          Profile Other
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Image src={User5} height="35" className="mr-2 rounded" />
          Profile Other
        </NavDropdown.Item>
        <NavDropdown.Item>Manage Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Account</NavDropdown.Item>
        <NavDropdown.Item>Help Center</NavDropdown.Item>
        <NavDropdown.Item onClick={onSignOut}>
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
  );
}

NavSecondary.propTypes = {
  onSignOut: PropTypes.func,
};

export default NavSecondary;

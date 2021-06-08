/**
 *
 * NavSecondary
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FaBell, FaSlidersH, FaSearch } from 'react-icons/fa';
import SearchBarContainer from 'containers/SearchBar';
import { Nav, Form, Alert, Image, NavLink } from 'react-bootstrap';

import User1 from 'images/users/user1.png';
import User2 from 'images/users/user2.png';
import User3 from 'images/users/user3.png';
import User4 from 'images/users/user4.png';
import User5 from 'images/users/user5.png';
import Dropdown from 'components/Dropdown';

function NavSecondary({ onSignOut }) {
  return (
    <Nav className="nav-secondary align-items-center">
      <Nav.Link>
        <FaSearch size="1.2rem" color="white" />
        {false && <SearchBarContainer />}
      </Nav.Link>
      <Dropdown>
        <Dropdown.Toggle as={NavLink}>
          <FaBell size="1.2rem" color="white" />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight className="non-items">
          <Alert variant="warning" className="mb-0">
            Not available now!
          </Alert>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={NavLink}>
          <Image src={User1} height="35" className="rounded" />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight>
          <Dropdown.Item>
            <Image src={User2} height="35" className="mr-2 rounded" />
            Profile Other
          </Dropdown.Item>
          <Dropdown.Item>
            <Image src={User3} height="35" className="mr-2 rounded" />
            Profile Other
          </Dropdown.Item>
          <Dropdown.Item>
            <Image src={User4} height="35" className="mr-2 rounded" />
            Profile Other
          </Dropdown.Item>
          <Dropdown.Item>
            <Image src={User5} height="35" className="mr-2 rounded" />
            Profile Other
          </Dropdown.Item>
          <Dropdown.Item>Manage Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Help Center</Dropdown.Item>
          <Dropdown.Item onClick={onSignOut}>Sign out of Netflix</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={NavLink}>
          <FaSlidersH size="1.2rem" color="white" />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight className="non-items">
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

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
  NavDropdown,
  Form,
  Alert,
  Image,
  Button,
} from 'react-bootstrap';
import { FaBell, FaSlidersH, FaSearch } from 'react-icons/fa';

import SearchBarContainer from 'containers/SearchBar';
import * as ROUTES from 'utils/routes';
import { useAuthListener } from 'hooks';
import { FirebaseContext } from 'context/firebase';

import Logo from 'images/logo.svg';
import User1 from 'images/users/user1.png';
import User2 from 'images/users/user2.png';
import User3 from 'images/users/user3.png';
import User4 from 'images/users/user4.png';
import User5 from 'images/users/user5.png';
import Wrapper from './Wrapper';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import NavItems from './NavItems';

function Header({ fixed }) {
  const { firebase } = useContext(FirebaseContext);
  const { user: loggedInUser } = useAuthListener();

  return (
    <Wrapper>
      <Navbar fixed={fixed ? 'top' : null}>
        <Navbar.Brand as={RouteLink} to={ROUTES.HOME}>
          <Image src={Logo} alt="Netflix Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Collapse>
          {loggedInUser ? (
            <React.Fragment>
              <Nav className="nav-primary mr-auto align-items-center d-block d-md-none">
                <NavDropdown title="Browse" alignRight={false}>
                  <NavItems component={NavDropdown.Item} />
                </NavDropdown>
              </Nav>
              <Nav className="nav-primary mr-auto align-items-center d-none d-md-flex">
                <NavItems component={NavLink} />
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
          ) : (
            <Button
              exact
              as={RouteLink}
              to={ROUTES.LOGIN}
              className="ml-auto"
              activeClassName="d-none"
              size="sm"
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

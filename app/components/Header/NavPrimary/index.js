/**
 *
 * NavPrimary
 *
 */

import React from 'react';
import { Nav, NavLink, NavDropdown } from 'react-bootstrap';
import NavItems from './NavItems';

function NavPrimary() {
  return (
    <React.Fragment>
      <Nav className="mr-auto align-items-center d-block d-md-none">
        <NavDropdown title="Browse" alignRight={false}>
          <NavItems component={NavDropdown.Item} />
        </NavDropdown>
      </Nav>
      <Nav className="mr-auto align-items-center d-none d-md-flex">
        <NavItems component={NavLink} />
      </Nav>
    </React.Fragment>
  );
}

NavPrimary.propTypes = {};

export default NavPrimary;

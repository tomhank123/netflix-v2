/**
 *
 * Header
 *
 */

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteLink } from 'react-router-dom';

import { Image, Button, Container } from 'react-bootstrap';
import * as ROUTES from 'utils/routes';
import { useAuthListener, useScrollDirection } from 'hooks';
import { FirebaseContext } from 'context/firebase';
import Logo from 'images/logo.svg';

import Wrapper from './Wrapper';
import Navbar from './Navbar';
import NavPrimary from './NavPrimary';
import NavSecondary from './NavSecondary';

function Header({ fixed }) {
  const { firebase } = useContext(FirebaseContext);
  const { user: loggedInUser } = useAuthListener();
  const scrolldirection = useScrollDirection('down');
  const [scrolledtotop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Navbar
        fixed={fixed ? 'top' : null}
        scrolledtotop={scrolledtotop ? 1 : 0}
        scrolldirection={scrolldirection}
      >
        <Container fluid>
          <Navbar.Brand as={RouteLink} to={ROUTES.HOME}>
            <Image src={Logo} alt="Netflix Logo" height="40" />
          </Navbar.Brand>
          <Navbar.Collapse>
            {loggedInUser && (
              <React.Fragment>
                <NavPrimary />
                <NavSecondary onSignOut={() => firebase.auth().signOut()} />
              </React.Fragment>
            )}

            {!loggedInUser && (
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
        </Container>
      </Navbar>
    </Wrapper>
  );
}

Header.propTypes = {
  fixed: PropTypes.bool,
};

export default Header;

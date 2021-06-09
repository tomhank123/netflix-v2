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

import GenreToggle from 'containers/GenreToggle';
import Wrapper from './Wrapper';
import StyledNavbar from './Navbar';
import NavPrimary from './NavPrimary';
import NavSecondary from './NavSecondary';

function Header({ fixed, showGenreToggle = false }) {
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
    <Wrapper
      fixed={fixed}
      showGenreToggle={showGenreToggle}
      scrolledtotop={scrolledtotop ? 1 : 0}
      scrolldirection={scrolldirection}
    >
      <StyledNavbar>
        <Container fluid>
          <StyledNavbar.Brand as={RouteLink} to={ROUTES.HOME}>
            <Image src={Logo} alt="Netflix Logo" height="40" />
          </StyledNavbar.Brand>
          <StyledNavbar.Collapse>
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
          </StyledNavbar.Collapse>
        </Container>
      </StyledNavbar>

      {showGenreToggle && (
        <StyledNavbar>
          <Container fluid>
            <GenreToggle />
          </Container>
        </StyledNavbar>
      )}
    </Wrapper>
  );
}

Header.propTypes = {
  fixed: PropTypes.bool,
  showGenreToggle: PropTypes.bool,
};

export default Header;

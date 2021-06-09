import styled, { css } from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const StyledNavbar = styled(Navbar)`
  padding: 0.5rem 0;

  background-color: transparent;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  transition: var(--transition);

  ${props =>
    props.scrolldirection === 'up' &&
    !props.scrolledtotop &&
    css`
      background-color: var(--pallete-primary);
    `};

  ${props =>
    props.scrolldirection === 'down' &&
    !props.scrolledtotop &&
    css`
      background-color: var(--pallete-primary);
    `};

  .container-fluid {
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 992px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
`;

StyledNavbar.defaultProps = {
  variant: 'dark',
};

export default StyledNavbar;

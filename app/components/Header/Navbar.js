import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const StyledNavbar = styled(Navbar)`
  padding: 0.5rem 0;

  .container-fluid {
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 992px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .navbar-brand {
    margin-left: -10px;
  }
`;

StyledNavbar.defaultProps = {
  variant: 'dark',
};

export default StyledNavbar;

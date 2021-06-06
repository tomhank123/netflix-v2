import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const StyledNavbar = styled(Navbar)`
  background-color: inherit;
`;

StyledNavbar.defaultProps = {
  variant: 'dark',
};

export default StyledNavbar;

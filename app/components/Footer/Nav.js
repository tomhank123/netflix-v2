import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

const StyledNav = styled(Nav)`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .nav-link {
    padding-left: 0;
    padding-right: 0;
    color: grey;
  }
`;

StyledNav.defaultProps = {};

export default StyledNav;

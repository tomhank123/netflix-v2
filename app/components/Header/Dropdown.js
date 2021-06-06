import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from 'react-bootstrap/NavLink';

const StyledDropdown = styled(Dropdown)`
  background-color: var(--pallete-primary);
`;

StyledDropdown.defaultProps = {};
StyledDropdown.Toggle.defaultProps = {
  as: NavLink,
};
StyledDropdown.Menu.defaultProps = {
  alignRight: true,
};

export default StyledDropdown;

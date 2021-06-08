/**
 *
 * Dropdown
 *
 */

import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

export default styled(Dropdown)`
  font-size: 14px;

  .dropdown-menu {
    background-color: var(--pallete-primary);
    color: var(--pallete-secondary);

    &.non-items {
      padding: 1.5rem;
    }
  }

  .dropdown-divider {
    border-color: #343434;
  }

  .dropdown-item {
    background-color: var(--pallete-primary);
    color: var(--pallete-secondary);

    font-size: 1rem;

    &:hover {
      color: var(--pallete-primary);
      background-color: var(--pallete-secondary);
    }
  }

  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
`;

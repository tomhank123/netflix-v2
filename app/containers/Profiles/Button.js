import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export default styled(Button)`
  border-radius: 0;
  background-color: transparent;
  border: 1px solid grey;
  color: grey;

  padding: 0.25rem 1.5rem;
  margin-top: 2rem;

  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`;

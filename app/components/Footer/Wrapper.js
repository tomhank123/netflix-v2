import styled from 'styled-components';

export default styled.div`
  /* @TODO: For testing */
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  overflow: hidden;

  width: 100%;

  margin: 0;
  padding: 0;
`;

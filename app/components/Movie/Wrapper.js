import styled from 'styled-components';

export default styled.div`
  margin: 0;
  padding: 0;

  img {
    border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  }
`;

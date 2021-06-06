import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};

  width: 100%;

  margin: 0;
  padding: 2rem 0;
  color: grey;

  .container,
  .container-fluid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;

    > * {
      margin: 0;
    }
  }
`;

StyledFooter.defaultProps = {
  id: 'footer',
};

export default StyledFooter;

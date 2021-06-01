import styled from 'styled-components';

export default styled.section`
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;

    .inner-card {
      max-width: 560px;
      width: 100%;

      margin: 1rem;
      margin-top: 3rem;
    }

    #footer {
      margin-top: auto;
    }
  }
`;

import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;

  > * {
    width: 100%;
  }

  > *:nth-child(2) {
    margin-top: 50px;
    max-width: 500px;
  }

  > *:nth-child(3) {
    margin-top: auto;
  }
`;

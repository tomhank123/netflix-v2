import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(2, 30vw);
  grid-gap: 1rem;

  > div {
    width: 100%;
    height: 30vw;

    border-radius: 4px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 10vw);

    > div {
      height: 10vw;
    }
  }
`;

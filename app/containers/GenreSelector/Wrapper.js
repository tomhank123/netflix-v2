import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;
  border: 1px solid #d8d8d8;

  h2 {
    margin-bottom: 0;
  }

  select {
    min-width: 200px;
  }
`;
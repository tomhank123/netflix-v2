import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .container,
  .container-fluid {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

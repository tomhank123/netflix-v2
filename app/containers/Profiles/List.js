import styled from 'styled-components';

export default styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  li {
    list-style-type: none;
    text-align: center;

    &:hover > img {
      border: 3px solid white;
    }

    &:hover p {
      font-weight: bold;
      color: white;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  p {
    color: #808080;
    text-overflow: ellipsis;

    margin: 0;
    margin-top: 0.25rem;

    &:hover {
      font-weight: bold;
      color: #e5e5e5;
    }
  }

  img {
    width: 10vw;
    height: 10vw;

    border: 3px solid transparent;
    cursor: pointer;
    border-radius: 6px;

    margin: 0;
    padding: 0;
  }
`;

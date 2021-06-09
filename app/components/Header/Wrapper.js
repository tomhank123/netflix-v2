import styled, { css } from 'styled-components';

export default styled.div.attrs({ id: 'header' })`
  width: 100%;
  margin: 0;
  padding: 0;

  background-color: transparent;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  transition: var(--transition);

  ${props =>
    props.fixed &&
    css`
      position: fixed;
      z-index: 1000;
    `};

  ${props =>
    props.scrolldirection === 'down' &&
    props.showGenreToggle &&
    css`
      .navbar:nth-child(1) {
        display: none;
      }
    `};

  ${props =>
    props.scrolldirection === 'up' &&
    !props.scrolledtotop &&
    css`
      background-color: var(--pallete-primary);
    `};

  ${props =>
    props.scrolldirection === 'down' &&
    !props.scrolledtotop &&
    css`
      background-color: var(--pallete-primary);
    `};
`;

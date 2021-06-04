/* eslint-disable indent */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --pallete-white: ${props => props.theme.pallete.common.white};

    --pallete-primary: ${props => props.theme.pallete.primary.main};
    --pallete-primary-dark: ${props => props.theme.pallete.primary.dark};
    --pallete-primary-light: ${props => props.theme.pallete.primary.light};
    --pallete-primary-lightest: ${props =>
      props.theme.pallete.primary.lightest};
    --pallete-primary-shadow: ${props => props.theme.pallete.primary.shadow};

    --pallete-secondary: ${props => props.theme.pallete.secondary.main};
    --pallete-secondary-light: ${props => props.theme.pallete.secondary.light};
    --pallete-secondary-lightest: ${props =>
      props.theme.pallete.secondary.lightest};

    --pallete-red: ${props => props.theme.pallete.red.main};
    --pallete-red-tint: ${props => props.theme.pallete.red.tint};

    --font-sans: ${props => props.theme.typography.fontFamily};
    --font-mono: ${props => props.theme.typography.fontMono};
    --font-loaded: ${props => props.theme.typography.fontLoaded};

    --bg-color: ${props => props.theme.pallete.primary.main};
    --text-color: ${props => props.theme.pallete.secondary.main};
    --border-radius: ${props => props.theme.shape.borderRadius};
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: var(--font-sans);
    font-size: 16px;
  }
  
  body.fontLoaded {
    font-family: var(--font-loaded);
    font-size: 16px;
  }

  #app {
    min-height: 100%;
    min-width: 100%;

    background-color: var(--bg-color);
    color: var(--text-color);
  }
`;

export default GlobalStyle;

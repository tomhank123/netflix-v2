import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
  
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  #app {
    min-height: 100%;
    min-width: 100%;

    // background-color: #000000;
    // color: #e5e5e5;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;

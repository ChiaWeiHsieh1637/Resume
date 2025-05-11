import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #0a192f;
    color: #ccd6f6;
    font-family: 'Fira Code', monospace;
    line-height: 1.6;
  }

  h1, h2, h3 {
    color: #64ffda;
  }

  a {
    color: #64ffda;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import { colors, fontFamily } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${colors.background.primary};
    color: ${colors.text.primary};
    font-family: ${fontFamily.primary};
    transition: all 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${colors.accent};
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }

  ::selection {
    background-color: ${colors.accent}33;
    color: ${colors.text.primary};
  }
`;

export default GlobalStyle;

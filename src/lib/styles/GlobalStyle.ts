import { createGlobalStyle } from 'styled-components';
import { themeType } from './../types/theme';

export const GlobalStyle = createGlobalStyle<{ theme: themeType }>`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *::before, *::after {
    font-family: 'Space Mono', monospace;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  body {
    font-size: 1.3rem;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

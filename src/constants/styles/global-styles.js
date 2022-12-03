import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${() => css`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

    * {
      border: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0;
      list-style: none;
      text-decoration: none;
      outline: none;
    };

    body {
      font-family: 'League Spartan', sans-serif;
      position: relative;
    }

    .root {
      position: relative;
    }

    .openMenu {
      transition: height 0.3s ease;
      height: 100vh;
    }

    .closeMenu {
      transition: height 0.3s ease;
      height: 0;
      overflow:hidden;
    }
  `}
`;

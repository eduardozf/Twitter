import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Roboto,sans-serif;
    line-height: 1.3125;
  }

  html, body, #root{
    height: 100%;
    color: var(--black);
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  :root {
    --blue: #1DA1F2;
    --rgblue: 29,161,242;
    --green: #25B269;
    --pink: #DB4171;
    --dark: #15202B;

    --white: #fff;
    --black: #14171A;
    --gray: #8697A4;
    --light-gray: #E6ECF0;
  }
`

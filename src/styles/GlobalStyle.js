import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif; 
  }
  
  a, button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;

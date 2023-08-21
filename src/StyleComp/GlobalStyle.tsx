import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: #111;
    font-family: Noto Sans KR;
    font-style: normal;
    line-height: normal;    
  }
  ul {
    margin: 0;
    padding: 0;
  }

  li{
    list-style: none;

    &.button{
      &:hover{
          cursor: pointer;
          opacity: 60%;
      }
      &.active{
        background: #000;
        color: white;
      }
    }
  }

  
  h1 {
    font-size: 1.75rem;
    font-weight: 400;
  }

  h2{
    font-size: 1.125rem;
    font-weight: 500;

  }

  p{
    font-size: 0.75rem;
    font-weight: 400;
  }
  
  h1, h2, p, li{
    margin: 0;
    cursor: default;
  }

  button {
    background-color: rgba(0,0,0,0);
    border: 0;

    &:hover {
        cursor: pointer;
    }
  }
`;

export default GlobalStyle;

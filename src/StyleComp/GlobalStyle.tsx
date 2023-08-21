import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  } */
  * {
    /* color: white; */
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li.button{
    &:hover{
        cursor: pointer;
        opacity: 40%;
    }
    &.active{
      background: #000;
      color: white;
    }
  }

  h2, p, li{
    margin: 0;
    cursor: default;
  }

  button {
    background-color: rgba(0,0,0,0);
    border: 0;

    &:hover {
        cursor: pointer;
        opacity: 40%;
    }
  }
`;

export default GlobalStyle;
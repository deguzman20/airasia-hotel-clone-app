import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: hidden;
    height: 1000px;
  }

  body {
   background-color: rgb(248 248 248);
   font-family: "DM Sans", Roboto;
  }
  
  .carousel-control-prev-icon::after,
  .carousel-control-next-icon::after {
   content: ''
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: black;
    border-radius: 20px;
  }
`;

export default GlobalStyle;


import { createGlobalStyle } from "styled-components";
import { Theme } from "@mui/material/styles";

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`
  body {
    margin: 0;
    padding: 0;
    min-hight: 100hv;
    font-family: 'Handlee', cursive;
    background-image: linear-gradient(to right bottom, #e7f6f1, #cfede4, #b7e5d7);
    color: "#333333";
    }};
    transition: background-color 0.3s, color 0.3s;
    ::selection {
      color: red;
      background: yellow;
    }
  }
`;

import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${Fonts};
  ${variables};

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: var(--font-custom);
    font-weight: 400;
    line-height: 1.5;
    overscroll-behavior: none;
  }
`;

export default GlobalStyle;

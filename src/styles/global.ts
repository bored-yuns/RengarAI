import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    transition: all ease 0.24s;
  }
  a { cursor: pointer; text-decoration: none; }
`;

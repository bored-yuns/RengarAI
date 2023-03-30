import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    transition: all ease 0.24s;
  }
  a { cursor: pointer; text-decoration: none; }

  .text-ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

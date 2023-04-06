import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    transition: all ease 0.24s;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a { cursor: pointer; text-decoration: none; }
  body { background-color: #1A191D; }

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

  .text-ellipsis-single {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
    @supports (-webkit-line-clamp: 1) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  .mdx-embed {
    h1 {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      line-height: 1.4;
      margin-bottom: 12px;
    }
    p {
      font-size: 15.6px;
      font-weight: 500;
      color: #cccccc;
      line-height: 1.6;
      margin-bottom: 8px;
    }
    a {
      color: #AD95FF;
      text-decoration: underline;
    }
    ul {
      display: block;
      list-style-type: disc;
      margin-block-start: 14px;
      margin-block-end: 8px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
      font-size: 15.6px;
      font-weight: 500;
      color: #cccccc;
    }
  ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 14px;
      margin-block-end: 8px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
      font-size: 15.6px;
      font-weight: 500;
      color: #cccccc;
    }
  li {
     display: list-item;
     text-align: -webkit-match-parent;
    }
  }
`;

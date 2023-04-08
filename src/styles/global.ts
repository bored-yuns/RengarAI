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

  .markdown-body {
    background-color: transparent;
  }

  .mdx-embed {
    color: #cccccc;
    font-size: 15.6px;
    
    h1 {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    }
    h2 {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
    h3, h4, h5, h6 {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
    strong {
      font-size: 15.6px;
      font-weight: 600;
      color: #fff;
    }    
    p {
      font-size: 15.6px;
      font-weight: 500;
      color: #cccccc;
    }
    a {
      color: #AD95FF;
      text-decoration: underline;
    }
    ul {
      display: block;
      list-style-type: disc;
      font-size: 15.6px;
      font-weight: 500;
      color: #cccccc;
    }
  ol {
      display: block;
      list-style-type: decimal;
      font-size: 15.6px;
      font-weight: 500;
      color: #cccccc;
    }
  li {
     display: list-item;
     line-height: 1.4;
     text-align: -webkit-match-parent;
    }
  }
`;

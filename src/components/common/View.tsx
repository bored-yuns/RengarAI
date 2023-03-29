import styled from "styled-components";

type FlexProps = {
  width?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  direction?: string;
};

export const Flex = styled.div<FlexProps>`
  width: ${(props) => props.width || "fit-content"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const SplitView = styled.div<FlexProps>`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: space-between;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const PageWrapper = styled.div`
  width: 100%;
  padding: 34px 54px;
  box-sizing: border-box;
`;

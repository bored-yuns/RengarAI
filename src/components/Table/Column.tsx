import { CellProps } from ".";
import React from "react";
import styled from "styled-components";

type ColumnCellProps = CellProps & {
  row?: any;
  data?: any;
  render?: any;
};

type ColumnProps = {
  children: React.ReactNode;
};

type CellStyleProps = {
  width: string | undefined;
};

export type RenderProps = {
  value: any;
  row: any;
};

export const ColumnCell = ({ width, data, render, row }: ColumnCellProps) => {
  return (
    <ColumnCellView width={width}>
      {render ? render({ value: data, row }) : data}
    </ColumnCellView>
  );
};

const Column = ({ children }: ColumnProps) => {
  return <ColumnView>{children}</ColumnView>;
};

const ColumnView = styled.ul`
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  box-sizing: border-box;
  background-color: transparent;

  :hover {
    transition: all ease-in-out 0.24s;
    background-color: #f8f8f8;
  }
`;

const ColumnCellView = styled.li<CellStyleProps>`
  width: ${(props) => props.width || "fit-content"};
  margin: 0px 22px;
  height: 100%;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
`;

export default Column;

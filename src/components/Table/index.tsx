import Column, { ColumnCell } from "./Column";
import Header, { HeadCell } from "./Header";

import React from "react";
import styled from "styled-components";

type TableProps = {
  data: any[];
  children: React.ReactNode | [];
};

export type CellProps = {
  name: string;
  width?: string;
};

const Table = ({ data, children }: TableProps) => {
  return (
    <TableView>
      <Header>
        {React.Children.map(children, (el: any) => {
          return <HeadCell key={el.key} {...el.props} />;
        })}
      </Header>
      {data.map((el, idx) => {
        return (
          <Column key={idx}>
            {React.Children.map(children, (child: any) => {
              const renderValue = el[child.key];
              return (
                <ColumnCell
                  key={child.key}
                  row={el}
                  data={renderValue}
                  {...child.props}
                />
              );
            })}
          </Column>
        );
      })}
    </TableView>
  );
};

const TableView = styled.table`
  width: 100%;
  margin-top: 24px;
`;

export default Table;

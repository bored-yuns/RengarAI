import { CellProps } from ".";
import styled from "styled-components";

type HeadCellProps = CellProps;

type HeaderProps = {
  children: React.ReactNode;
};

type CellStyleProps = {
  width: string | undefined;
};

export const HeadCell = ({ name, width }: HeadCellProps) => {
  return (
    <HeaderCell width={width}>
      <HeaderTag>
        <HeaderLabel>{name}</HeaderLabel>
      </HeaderTag>
    </HeaderCell>
  );
};

const Header = ({ children }: HeaderProps) => {
  return <HeaderView>{children}</HeaderView>;
};

const HeaderView = styled.ul`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  box-sizing: border-box;
  background-color: #fafafa;
`;

const HeaderCell = styled.li<CellStyleProps>`
  width: ${(props) => props.width || "fit-content"};
  height: 100%;
  margin: 0px 22px;
  display: flex;
  align-content: center;
  justify-content: left;
`;

const HeaderTag = styled.button`
  border: none;
  height: 100%;
  padding: 0px;
  background-color: transparent;
`;

const HeaderLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #5f5f5f;
`;

export default Header;

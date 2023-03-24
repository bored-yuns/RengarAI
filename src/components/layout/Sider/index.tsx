import MenuList from "./Menu";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.aside`
  min-width: 284px;
  max-width: 284px;
  position: sticky;
  top: 72px;
  z-index: 10;
  height: calc(100vh - 70px);
  background-color: #fdfdfd;
  border-right: 1px solid #ededed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <MenuList />
    </Wrapper>
  );
};

export default SideBar;

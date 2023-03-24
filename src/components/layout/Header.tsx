import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  width: 100vw;
  height: 70px;
  position: sticky;
  top: 0px;
  z-index: 20;
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%),
    0 2px 4px 0 rgb(0 0 0 / 2%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 34px;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;

const LoginButton = styled.div`
  padding: 0px 19px;
  height: 40px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.primary100};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <LogoImg src={"/images/logo.png"} />
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  );
};

export default Header;

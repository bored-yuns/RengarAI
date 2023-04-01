import { DesktopView } from "../common/View";
import Link from "next/link";
import Profile from "./Profile";
import React from "react";
import styled from "styled-components";

type HeaderProps = {
  setMenuModal: (visible: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ setMenuModal }) => {
  return (
    <Wrapper>
      <Link href="/channel">
        <LogoImg src={"/images/logo.png"} />
      </Link>
      <DesktopView>
        <Profile />
      </DesktopView>
      <MenuIcon src="/images/mb-menu.svg" onClick={() => setMenuModal(true)} />
    </Wrapper>
  );
};

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

  @media only screen and (max-width: 575px) {
    padding: 0px 18px;
  }
`;

const LogoImg = styled.img`
  height: 24px;
  object-fit: contain;
  cursor: pointer;

  @media only screen and (max-width: 575px) {
    height: 21px;
  }
`;

const MenuIcon = styled.img`
  height: 19px;
  display: none;
  object-fit: contain;

  @media only screen and (max-width: 575px) {
    display: block;
  }
`;

export default Header;

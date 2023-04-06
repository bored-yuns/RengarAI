import Link from "next/link";
import Profile from "../Profile";
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/useRedux";

type LayoutProps = {
  children?: React.ReactNode;
};

const Content = styled.main`
  width: 840px;
  margin: 0px auto;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  position: relative;
  overflow: unset;
  transition: all 0.3s ease-out 0s;
  background-color: #1a191d;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #1a191d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #717171;
`;

const HeaderView = styled.header`
  width: 100vw;
  height: 68px;
  transition: none;
  backdrop-filter: blur(42px) brightness(90%);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999999;
  padding: 0px 24px;
  box-sizing: border-box;
`;

const HeadContent = styled.div`
  width: 840px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  height: 30px;
  object-fit: contain;
  cursor: pointer;

  @media only screen and (max-width: 575px) {
    height: 21px;
  }
`;

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const { uid } = useAppSelector((state) => state.auth);

  return (
    <>
      {uid && (
        <HeaderView>
          <HeadContent>
            <Link href="/demo">
              <LogoImg src={"/images/logo.png"} />
            </Link>
            <Profile />
          </HeadContent>
        </HeaderView>
      )}
      <Content>{children}</Content>
      <Footer>
        <FooterText>© Rengar AI. All rights reserved</FooterText>
      </Footer>
    </>
  );
};

export default DashboardLayout;

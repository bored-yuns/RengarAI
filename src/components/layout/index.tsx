import React, { useState } from "react";

import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Sider from "./Sider";
import styled from "styled-components";

type LayoutProps = {
  children?: React.ReactNode;
};

const Section = styled.section`
  width: 100vw;
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: flex-start;
`;

const Content = styled.main`
  width: 100%;
  margin: 0px auto;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  position: relative;
  overflow: unset;
  transition: all 0.3s ease-out 0s;
  background-color: #fff;

  @media only screen and (min-width: 1720px) {
    width: 1720px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [menuModal, setMenuModal] = useState(false);

  return (
    <>
      <MobileMenu modal={menuModal} setModal={setMenuModal} />
      <Header setMenuModal={setMenuModal} />
      <Section>
        <Sider />
        <Content>{children}</Content>
      </Section>
    </>
  );
};

export default DashboardLayout;

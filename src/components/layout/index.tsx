import Header from "./Header";
import React from "react";
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
  display: flex;
  min-height: calc(100vh - 70px);
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: unset;
  transition: all 0.3s ease-out 0s;
  background-color: #fff;
`;

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Section>
        <Sider />
        <Content>{children}</Content>
      </Section>
    </>
  );
};

export default DashboardLayout;

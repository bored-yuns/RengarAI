import Breadcrumb from "./Breadcrumb";
import { Flex } from "./View";
import React from "react";
import styled from "styled-components";

type HeaderProps = {
  title: string;
  icon: string;
  children: React.ReactNode;
};

const Header = ({ title, icon, children }: HeaderProps) => {
  return (
    <Wrapper>
      <Breadcrumb>{children}</Breadcrumb>
      <Flex>
        <Icon src={icon} />
        <PageTitle>{title}</PageTitle>
        <TagContainer>
          <TagView>신기능</TagView>
        </TagContainer>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const PageTitle = styled.h1`
  font-size: 26px;
  font-weight: 800;
  color: #08004a;
`;

const Icon = styled.img`
  width: 26px;
  margin-right: 11px;
  object-fit: contain;
  padding-bottom: 3px;
`;

const TagContainer = styled.div`
  margin-left: 14px;
  padding-bottom: 3px;
`;

const TagView = styled.div`
  padding: 10px 9px;
  background-color: #efffef;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 700;
  color: #00d627;
`;

export default Header;

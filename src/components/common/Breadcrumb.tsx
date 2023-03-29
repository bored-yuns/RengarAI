import Link from "next/link";
import React from "react";
import styled from "styled-components";

type BreadcrumbItemProps = {
  href: string;
  label: string;
};

const ItemLink = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: #a09eb2;

  :hover {
    font-weight: 500;
    color: #351fd7;
  }
`;

export const BreadcrumbItem = ({ href, label }: BreadcrumbItemProps) => {
  if (href) return <ItemLink href={href}>{label} / </ItemLink>;
  else return <ItemLink href={href}>{label}</ItemLink>;
};

type BreadcrumbProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  margin-bottom: 5px;
`;

const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Breadcrumb;

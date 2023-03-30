import { BreadcrumbItem } from "@/components/common/Breadcrumb";
import Head from "next/head";
import Header from "@/components/common/Header";
import { PageWrapper } from "@/components/common/View";
import styled from "styled-components";

const Page = () => {
  return (
    <>
      <Head>
        <title>Rengar AI</title>
        <meta name="description" content="Rengar AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Header title="영상 오버뷰" icon="/images/menu-video.svg">
          <BreadcrumbItem label="메인" href="/" />
          <BreadcrumbItem label="영상 오버뷰" href="" />
        </Header>
      </PageWrapper>
    </>
  );
};

export default Page;

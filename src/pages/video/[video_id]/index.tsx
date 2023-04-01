import { PageWrapper, SplitView } from "@/components/common/View";

import Head from "next/head";
import Prompt from "@/components/video/Prompt";
import React from "react";
import VideoPlayer from "@/components/video/Player";
import styled from "styled-components";
import { useRouter } from "next/router";

const MainView = styled.div`
  width: 60%;
  max-height: calc(100vh - 138px);

  @media only screen and (max-width: 1340px) {
    width: 100%;
    background-color: #fff;
  }
`;

const Sider = styled.aside`
  width: 37.5%;
  height: calc(100vh - 138px);

  @media only screen and (max-width: 1340px) {
    width: 100%;
    margin-top: 42px;
    height: fit-content;
  }
`;

const MainLayout = styled(SplitView)`
  width: 100%;

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
  }
`;

const VideoDetail: React.FC = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>영상 | Rengar</title>
        <meta name="description" content="Rengar AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <MainLayout>
          <MainView>
            <VideoPlayer />
          </MainView>
          <Sider>
            <Prompt />
          </Sider>
        </MainLayout>
      </PageWrapper>
    </>
  );
};

export default VideoDetail;

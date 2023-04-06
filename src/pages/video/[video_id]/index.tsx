import { PageWrapper, SplitView } from "@/components/common/View";

import Head from "next/head";
import Prompt from "@/components/video/Prompt";
import React from "react";
import VideoPlayer from "@/components/video/Player";
import VideoService from "@/services/videos";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/useRedux";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const VideoDetail: React.FC = () => {
  const { query } = useRouter();
  const { uid } = useAppSelector((state) => state.auth);

  const { data, isLoading } = useQuery(
    "video_detail",
    async () =>
      await VideoService.getVideoDetail({
        user: uid,
        video_id: query.video_id,
      }),
    { enabled: !!uid && !!query.video_id }
  );

  if (isLoading || !data) {
    return <></>;
  }

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
            <VideoPlayer data={data} />
          </MainView>
          <Sider>
            <Prompt data={data} />
          </Sider>
        </MainLayout>
      </PageWrapper>
    </>
  );
};

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

export default VideoDetail;

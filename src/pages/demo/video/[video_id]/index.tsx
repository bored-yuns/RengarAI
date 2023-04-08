import React, { useEffect } from "react";
import VideoService, { IVideoDetail } from "@/services/videos";

import Analysis from "@/components/demo/Analysis";
import Head from "next/head";
import Loader from "@/components/common/Loader";
import VideoPlayer from "@/components/demo/VideoPlayer";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/useRedux";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const VideoDetail: React.FC = () => {
  const { query } = useRouter();
  const { uid } = useAppSelector((state) => state.auth);

  const { data, isLoading } = useQuery(
    ["video_detail", uid, query.video_id],
    async () =>
      await VideoService.getVideoDetail({
        user: uid,
        video_id: query.video_id,
      }),
    { enabled: !!uid && !!query.video_id, cacheTime: 180000 }
  );

  useEffect(() => {
    if (data && !isLoading) {
      const saved = localStorage.getItem("@video_records");
      const parsed = saved ? JSON.parse(saved) : [];
      const pureRecords = parsed.filter(
        (rec: IVideoDetail) => rec.video.video_id !== data.video.video_id
      );
      pureRecords.unshift(data);
      localStorage.setItem("@video_records", JSON.stringify(pureRecords));
    }
  }, [data, isLoading]);

  if (isLoading || !data) {
    return (
      <>
        <Head>
          <title>영상 분석 | Rengar</title>
          <meta name="description" content="Rengar AI" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{data.video.title} | Rengar</title>
        <meta name="description" content="Rengar AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <VideoPlayer data={data} />
        <Analysis data={data} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 134px;
  min-height: calc(100vh - 80px);
  background-color: #1a191d;

  @media only screen and (max-width: 768px) {
    padding: 114px 18px 0px;
    box-sizing: border-box;
  }
`;

export default VideoDetail;

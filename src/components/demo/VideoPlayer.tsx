import React, { useMemo } from "react";

import Breadcrumb from "../common/Breadcrumb";
import { BreadcrumbItem } from "../common/Breadcrumb";
import { Flex } from "../common/View";
import { IVideoDetail } from "@/services/videos";
import { formatThousand } from "@/utils/functions";
import styled from "styled-components";

type VideoPlayerProps = {
  data: IVideoDetail;
};

const VideoPlayer = ({ data }: VideoPlayerProps) => {
  const extractHashtags = (str: string): string[] => {
    const hashtags = str
      .split(/\s+/)
      .filter((word) => word.startsWith("#"))
      .map((hashtag) => hashtag.slice(1));
    return hashtags;
  };

  const hashtagList = useMemo(
    () => extractHashtags(data.analysis.hashtag),
    [data.analysis.hashtag]
  );

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem label="메인" href="/demo" />
        <BreadcrumbItem label="영상 분석" href="" />
      </Breadcrumb>
      <Flex align="flex-start" style={{ marginTop: 10 }}>
        <VideoIcon src="/images/menu-video.svg" />
        <Title className="text-ellipsis">{data.video.title}</Title>
      </Flex>
      {hashtagList && hashtagList.length > 0 && (
        <TagView>
          {hashtagList.map((el, idx) => {
            return <TagItem key={idx}>{el}</TagItem>;
          })}
        </TagView>
      )}
      <VideoView>
        <EmbedVideo
          title=""
          frameBorder="0"
          allowFullScreen
          src={`https://www.youtube.com/embed/${data.video.video_id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </VideoView>
      <StatsView>
        <StatItem>
          <StatIcon src="/images/hits.svg" />
          <StatValue>조회수 {formatThousand(data.video.hits)}회</StatValue>
        </StatItem>
        <StatDivider />
        <StatItem>
          <StatIcon src="/images/likes.svg" />
          <StatValue>
            좋아요 {formatThousand(data.video.like_count)}개
          </StatValue>
        </StatItem>
      </StatsView>
    </>
  );
};

const VideoView = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 22px;

  @media only screen and (max-width: 575px) {
    width: 100vw;
    border-radius: 0px;
    margin-left: -18px;
  }
`;

const EmbedVideo = styled.iframe`
  width: 100%;
  height: 100%;
`;

const VideoIcon = styled.img`
  height: 24px;
  object-fit: contain;
  margin-right: 10px;
  margin-bottom: 3px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: #f4f4f4;

  @media only screen and (max-width: 575px) {
    font-size: 18px;
  }
`;

const TagView = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
  overflow-x: scroll;
`;

const TagItem = styled.div`
  padding: 0px 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #b6b6b6;
  background-color: #252525;
  margin-right: 12px;
  flex-shrink: 0;
`;

const StatsView = styled.div`
  width: 100%;
  height: 68px;
  padding: 0px 24px;
  border-radius: 18px;
  box-sizing: border-box;
  background-color: #252525;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 575px) {
    padding: 16px;
  }
`;

const StatItem = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StatDivider = styled.div`
  width: 2px;
  height: 55%;
  background-color: #323232;
  border-radius: 999px;
`;

const StatIcon = styled.img`
  height: 18px;
  object-fit: contain;
  margin-right: 9px;
  margin-bottom: 3px;

  @media only screen and (max-width: 575px) {
    height: 14px;
    margin-right: 5px;
  }
`;

const StatValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #b6b6b6;

  @media only screen and (max-width: 575px) {
    font-size: 13px;
  }
`;

export default VideoPlayer;

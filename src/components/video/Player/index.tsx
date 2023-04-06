import { IVideoDetail } from "@/services/videos";
import React from "react";
import styled from "styled-components";

type VideoPlayerProps = {
  data: IVideoDetail;
};

const VideoPlayer = ({ data }: VideoPlayerProps) => {
  return (
    <>
      <VideoView>
        <EmbedVideo
          title=""
          frameBorder="0"
          allowFullScreen
          src={`https://www.youtube.com/embed/${data.video.video_id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </VideoView>
      <Title>{data.video.title}</Title>
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
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    margin-left: -34px;
    margin-top: -34px;
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: 14px;
    margin-left: -18px;
    margin-top: -24px;
  }
`;

const EmbedVideo = styled.iframe`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  color: #343434;
  margin-bottom: 5px;

  @media only screen and (max-width: 575px) {
    font-size: 18px;
  }
`;

export default VideoPlayer;

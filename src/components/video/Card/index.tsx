import { Flex, SplitView } from "@/components/common/View";

import Link from "next/link";
import styled from "styled-components";

export const VideoView = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(25% - 18px));
  grid-gap: 34px 24px;
  margin-top: 34px;
`;

const ThumbnailCover = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  margin-bottom: 10px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all ease 0.25s;
`;

const CardView = styled(Link)`
  cursor: pointer;

  &:hover ${ThumbnailImg} {
    z-index: 0;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
`;

const ChannelImg = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  background-color: #f0f0f0;
  flex-shrink: 0;
  margin-right: 8px;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
  color: #343434;
  margin-bottom: 5px;
`;

const DescText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #888888;
`;

const DescDivider = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background-color: #888888;
  margin: 0px 7px;
`;

const KeywordView = styled(Flex)`
  margin-bottom: 12px;
  padding: 12px 6px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const KeywordTag = styled.div`
  padding: 10px 9px;
  font-size: 13px;
  font-weight: 600;
  color: #2f1dd1;
  background-color: #f9f8ff;
  border-radius: 9px;
  margin: 0px 6px;
`;

const VideoCard = () => {
  return (
    <CardView href={`/video/AnhFU8MwS-c`}>
      <ThumbnailCover>
        <ThumbnailImg src="https://i.ytimg.com/vi/3FxIZ53-XZc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhNC2DhmIjAQG0DofBH5w2jCs_FQ" />
        <KeywordView>
          <KeywordTag>키워드</KeywordTag>
          <KeywordTag>키워드</KeywordTag>
          <KeywordTag>키워드</KeywordTag>
        </KeywordView>
      </ThumbnailCover>

      <SplitView>
        <ChannelImg />
        <div>
          <Title className="text-ellipsis">
            내가 237분 동안 사라진 이유 호불호 없는 감성 힙합 플레이리스트
            호불호 없는 감성 힙합 플레이리스트 호불호 없는 감성 힙합
            플레이리스트
          </Title>
          <Flex>
            <DescText>조회수 124.2만회</DescText>
            <DescDivider />
            <DescText>좋아요 124.2만개</DescText>
          </Flex>
        </div>
      </SplitView>
    </CardView>
  );
};

export default VideoCard;

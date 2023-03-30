import { Flex, SplitView } from "@/components/common/View";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export const ChannelView = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(25% - 18px));
  grid-gap: 24px;
  margin-top: 34px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1 / 0.645;
  border-radius: 30px;
  border: 2px solid #f5f5f5;
  background-color: #fff;
  padding: 24px;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.125) 0px 7px 24px 0px;
  }
`;

const AvatarImg = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background-color: #f0f0f0;
  margin-right: 12px;
`;

const ChannelName = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: #1a1a1a;
`;

const ChannelID = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #8e8e8e;
  margin-top: 3px;
`;

const UtilButton = styled.div``;

const UtilIcon = styled.img`
  width: 18px;
  object-fit: contain;
`;

const StatView = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StatItem = styled.div`
  width: 48.5%;
`;

const StatLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #888888;
  margin-bottom: 3px;
`;

const StatValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
`;

const StatRate = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #0ed31d;
  margin-left: 7px;
`;

const TagView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TagItem = styled.div`
  padding: 11px 10px;
  background-color: #f9f8ff;
  font-size: 13.4px;
  font-weight: 600;
  color: #2f1dd1;
  border-radius: 10px;
  margin-right: 12px;
`;

const ChannelCard: React.FC = () => {
  const router = useRouter();

  return (
    <CardContainer onClick={() => router.push("/channel/FRIENDSHIP_ING")}>
      <SplitView>
        <Flex>
          <AvatarImg />
          <div>
            <ChannelName>곽튜브</ChannelName>
            <ChannelID>@JBKWAK</ChannelID>
          </div>
        </Flex>
        <UtilButton>
          <UtilIcon src="/images/card-utils.svg" />
        </UtilButton>
      </SplitView>
      <StatView>
        <StatItem>
          <StatLabel>구독자</StatLabel>
          <Flex>
            <StatValue>142만명</StatValue>
            <StatRate>+24%</StatRate>
          </Flex>
        </StatItem>
        <StatItem>
          <StatLabel>총 조회수</StatLabel>
          <Flex>
            <StatValue>2.9억회</StatValue>
            <StatRate>+82%</StatRate>
          </Flex>
        </StatItem>
      </StatView>
      <TagView>
        <TagItem>분석된 키워드</TagItem>
        <TagItem>분석된 키워드</TagItem>
      </TagView>
    </CardContainer>
  );
};

export default ChannelCard;

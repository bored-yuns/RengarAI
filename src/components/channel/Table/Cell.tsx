import { Flex } from "@/components/common/View";
import Link from "next/link";
import { RenderProps } from "@/components/Table/Column";
import styled from "styled-components";
import { useRouter } from "next/router";

const ChannelView = styled(Flex)`
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  margin-right: 8px;
  background-color: #f0f0f0;
`;

const ChannelName = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 3px;
`;

const ChannelID = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #8b8b8b;
`;

export const ChannelCell = ({ value }: RenderProps) => {
  return (
    <Link href={`/channel/${value.id}`}>
      <ChannelView>
        <Avatar />
        <div>
          <ChannelName>{value.name}</ChannelName>
          <ChannelID>@{value.id}</ChannelID>
        </div>
      </ChannelView>
    </Link>
  );
};

const StatusView = styled.div`
  width: 80px;
  height: 38px;
  border-radius: 10px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const StatusCell = () => {
  return <StatusView>매우 좋음</StatusView>;
};

const KeywordMain = styled.div`
  margin-bottom: 3px;
`;

const KeywordCount = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const KeywordCell = () => {
  return (
    <>
      <KeywordMain>키워드 1번</KeywordMain>
      <KeywordCount>총 12개</KeywordCount>
    </>
  );
};

const UtilityView = styled.button`
  border: 2px solid #f0f0f0;
  background-color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UtilImg = styled.img`
  width: 18px;
  object-fit: contain;
`;

export const Utility = () => {
  return (
    <UtilityView>
      <UtilImg src="/images/table-util.svg" />
    </UtilityView>
  );
};

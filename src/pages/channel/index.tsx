import ChannelCard, { ChannelView } from "@/components/channel/Card";
import {
  ChannelCell,
  KeywordCell,
  StatusCell,
  Utility,
} from "@/components/channel/Table/Cell";
import { ColumnCell, RenderProps } from "@/components/Table/Column";
import {
  DesktopView,
  MobileView,
  PageWrapper,
  SplitView,
} from "@/components/common/View";
import React, { useState } from "react";

import AddModal from "@/components/channel/Add";
import { BreadcrumbItem } from "@/components/common/Breadcrumb";
import Head from "next/head";
import Header from "@/components/common/Header";
import SubscriberService from "@/services/subscribers";
import Table from "@/components/Table";
import { formatThousand } from "@/utils/functions";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/useRedux";
import { useQuery } from "react-query";

const mockData = Array(5).fill({
  channel: { name: "우정잉", id: "FRIENDSHIP_ING" },
  subscriber_count: 42000,
  video_count: 142,
});

const AddButton = styled.button`
  padding: 12px 16px;
  border-radius: 999px;
  border: none;
  font-size: 15px;
  font-weight: 700;
  color: #060ee0;
  background-color: #f5f4fd;
  cursor: pointer;

  :hover {
    background-color: #e7e3fd;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
    margin-top: 14px;
  }
`;

const AddImg = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 8px;
  object-fit: contain;
`;

const HeadSplit = styled(SplitView)`
  @media only screen and (max-width: 575px) {
    width: 100%;
    align-items: unset;
    justify-content: unset;
    flex-direction: column;
  }
`;

const Page: React.FC = () => {
  const [addModal, setAddModal] = useState(false);

  /* const { uid } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useQuery(
    "subscribers",
    async () => await SubscriberService.getSubscriber(uid),
    { enabled: false }
  ); */

  return (
    <>
      <AddModal visible={addModal} setVisible={setAddModal} />
      <Head>
        <title>채널 오버뷰 | Rengar</title>
        <meta name="description" content="Rengar AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <HeadSplit align="flex-end">
          <Header title="채널 오버뷰" icon="/images/menu-overview.svg">
            <BreadcrumbItem label="메인" href="/" />
            <BreadcrumbItem label="채널 오버뷰" href="" />
          </Header>
          <AddButton /* onClick={() => setAddModal(true)} */>
            채널 추가
            <AddImg src="/images/plus.svg" />
          </AddButton>
        </HeadSplit>

        <DesktopView>
          <Table data={mockData}>
            <ColumnCell
              key="channel"
              width="18%"
              name="채널명"
              render={(props: RenderProps) => <ChannelCell {...props} />}
            />
            <ColumnCell
              key="subscriber_count"
              width="6%"
              name="구독자수"
              render={(props: RenderProps) =>
                `${formatThousand(props.value).toLocaleString()}만명`
              }
            />
            <ColumnCell
              key="video_count"
              width="6%"
              name="영상수"
              render={(props: RenderProps) =>
                `${props.value.toLocaleString()}개`
              }
            />
            <ColumnCell
              key="video_count"
              width="6%"
              name="총 조회수"
              render={(props: RenderProps) =>
                `${props.value.toLocaleString()}개`
              }
            />
            <ColumnCell
              key="video_count"
              width="6%"
              name="총 댓글수"
              render={(props: RenderProps) =>
                `${props.value.toLocaleString()}개`
              }
            />
            <ColumnCell
              key="video_count"
              width="80px"
              name="성과도"
              render={(props: RenderProps) => <StatusCell />}
            />
            <ColumnCell
              key="video_count"
              width="100px"
              name="기여도"
              render={(props: RenderProps) => <StatusCell />}
            />
            <ColumnCell
              key="video_count"
              width="6%"
              name="키워드"
              render={(props: RenderProps) => <KeywordCell />}
            />
            <ColumnCell
              key=""
              name=""
              width="40px"
              render={(props: RenderProps) => <Utility />}
            />
          </Table>
        </DesktopView>

        <MobileView>
          <ChannelView>
            {Array(4)
              .fill({})
              .map((_, idx) => (
                <ChannelCard key={idx} />
              ))}
          </ChannelView>
        </MobileView>
      </PageWrapper>
    </>
  );
};

export default Page;

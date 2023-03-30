import ChannelCard, { ChannelView } from "@/components/channel/Card";
import {
  ChannelCell,
  KeywordCell,
  StatusCell,
  Utility,
} from "@/components/channel/Table/Cell";
import Column, { ColumnCell, RenderProps } from "@/components/Table/Column";

import { BreadcrumbItem } from "@/components/common/Breadcrumb";
import Head from "next/head";
import Header from "@/components/common/Header";
import { PageWrapper } from "@/components/common/View";
import React from "react";
import SubscriberService from "@/services/subscribers";
import Table from "@/components/Table";
import { formatThousand } from "@/utils/functions";
import { useAppSelector } from "@/hooks/useRedux";
import { useQuery } from "react-query";

const mockData = Array(5).fill({
  channel: { name: "우정잉", id: "FRIENDSHIP_ING" },
  subscriber_count: 42000,
  video_count: 142,
});

const Page: React.FC = () => {
  const { uid } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useQuery(
    "subscribers",
    async () => await SubscriberService.getSubscriber(uid),
    { enabled: false }
  );

  return (
    <>
      <Head>
        <title>Rengar AI</title>
        <meta name="description" content="Rengar AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Header title="채널 오버뷰" icon="/images/menu-overview.svg">
          <BreadcrumbItem label="메인" href="/" />
          <BreadcrumbItem label="채널 오버뷰" href="" />
        </Header>
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
            render={(props: RenderProps) => `${props.value.toLocaleString()}개`}
          />
          <ColumnCell
            key="video_count"
            width="6%"
            name="총 조회수"
            render={(props: RenderProps) => `${props.value.toLocaleString()}개`}
          />
          <ColumnCell
            key="video_count"
            width="6%"
            name="총 댓글수"
            render={(props: RenderProps) => `${props.value.toLocaleString()}개`}
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
        {/* <ChannelView>
          {Array(6)
            .fill({})
            .map((_, idx) => (
              <ChannelCard key={idx} />
            ))}
        </ChannelView> */}
      </PageWrapper>
    </>
  );
};

export default Page;

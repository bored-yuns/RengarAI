import ChannelCard, { ChannelView } from "@/components/channel/Card";

import { BreadcrumbItem } from "@/components/common/Breadcrumb";
import Head from "next/head";
import Header from "@/components/common/Header";
import { PageWrapper } from "@/components/common/View";
import SubscriberService from "@/services/subscribers";
import { useAppSelector } from "@/hooks/useRedux";
import { useQuery } from "react-query";

const Page = () => {
  const { uid } = useAppSelector((state) => state.auth);
  /* const { data, isLoading } = useQuery(
    "subscribers",
    async () => await SubscriberService.getSubscriber(uid),
    { enabled: !!uid }
  ); */

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
        <ChannelView>
          {Array(6)
            .fill({})
            .map((_, idx) => (
              <ChannelCard key={idx} />
            ))}
        </ChannelView>
      </PageWrapper>
    </>
  );
};

export default Page;

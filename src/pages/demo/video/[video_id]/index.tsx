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

const sampleData = {
  video: {
    video_id: "AnhFU8MwS-c",
    title: "충격: 샘플 제목 입니다.",
    summary:
      '\n# **황우슬의 필모그래피 탐색: 독보적인 존재감의 한국 여배우**\n\n한국 영화의 전문가로서 실력파 배우 황우슬의 독특한 필모그래피를 소개하고자 한다. 황우슬은 단역에서도 시선을 사로잡는 존재감으로 유명하다. 이번 영상에서는 데뷔작부터 최근작까지 그녀의 다양한 행보를 살펴봅니다.\n\n**크리에이터 약력:** 이 영상은 한국 영화를 집중적으로 다루는 유튜브 채널 "K-Movie Addicts"에서 제작되었습니다. 한국 영화와 배우에 대한 심도 있는 분석과 리뷰, 토론을 제공하는 채널입니다. 동영상은 [여기](https://www.youtube.com/watch?v=ohdRbgF4Bgo)에서 찾을 수 있습니다.\n\n**3가지 핵심 사항:**\n\n- 화면 속 황우슬의 존재감은 단역에서도 뚜렷하고 매력적이다.\n    ',
    comment_summary:
      "\n제공된 글은 유명 인사인 황우슬혜 배우에 대한 다양한 사람들의 댓글로 구성되어 있습니다. 대부분의 댓글은 그녀의 매력적인 외모와 연기력에 대한 칭찬이며, 일부 댓글은 그녀의 목소리와 다양한 작품에 대한 이야기를 포함하고 있습니다. 이들 댓글은 그녀가 매우 사랑 받는 배우 중 하나임을 보여주고 있습니다.\n    ",
    like_counts: 5,
    hits: 100,
  },
  analysis: {
    hashtag:
      "\n1. #HwangWooSeulFilmography\n2. #UnrivaledPresence\n3. #KoreanActress\n4. #VersatileActing\n5. #KMovieAddicts\n    ",
    generated_title: "\n1번의 블로그 제목 아이디어\n    ",
    generated_summary:
      "\n한국 영화 전문가로서, 저는 재능 있는 배우 황우슬혜의 독특한 영화 작품들을 소개하고자 합니다. 황우슬혜는 작은 역할에서도 눈길을 끄는 매력적인 존재감으로 알려져 있습니다. 이 비디오에서는 그녀의 데뷔작부터 최신 작품까지 다양한 영화를 살펴보게 됩니다.\n\n이 비디오는 한국 영화에 대해 깊이 있는 분석, 리뷰, 토론을 제공하는 유튜브 채널 'K-Movie Addicts'에서 제작되었습니다. 이 비디오는 황우슬혜의 영화 작품들과 프로듀서의 해설이 조합되어 있으며, 데뷔작부터 최신 작품까지 연대순으로 정렬되어 있습니다.\n\n제작팀은 황우슬혜의 연기에 대해 \"작은 역할에서도 그녀의 독특한 존재감이 눈에 띄며 매력적입니다.\"라고 말했습니다.\n\n황우슬혜는 레슬러, 아내, 약사, 유치원 교사 등 다양한 역할을 연기하며 그녀의 배우로서의 다재다능함을 입증했습니다. 그녀는 일부 어려움을 겪었지만, 그녀의 연기로 많은 관객에게 지속적인 인상을 남겼습니다.\n\n이 비디오에서는 'K-Movie Addicts'가 황우슬혜의 작품들을 분석한 것은 아니며, 단지 그녀의 영화 작품들에 대한 프로듀서의 해설이 담긴 편집된 비디오입니다. 황우슬혜의 작품들은 다양한 스트리밍 플랫폼에서 볼 수 있으며 온라인으로 구매할 수도 있습니다.\n\n이 비디오를 통해 다양한 배우들의 작품을 살펴보고 그들의 독특한 연기를 이해하는 것은 새로운 영화를 찾고 영화 연기의 예술을 감상하는 좋은 방법입니다.\n        ",
    generated_script:
      '\n소개:\n안녕하세요 여러분, 한국 영화와 배우에 대한 최고의 통찰력과 리뷰를 제공하는 YouTube 채널인 K-Movie Addicts에 다시 오신 것을 환영합니다. 오늘은 연기로 관객들에게 깊은 인상을 남긴 실력파 배우 황우슬의 남다른 필모그래피를 소개한다. 데뷔작부터 최근작까지 그녀의 다양한 배역과 캐릭터를 살펴보며, 스크린 속 그녀의 존재감이 독보적인 이유를 보여줄 예정이다.\n\n몸:\n먼저 화면 속 황우슬의 뚜렷한 존재감에 대해 이야기해보자. 제작진의 말처럼 "단역에서도 독보적인 존재감이 돋보인다." 그녀는 레슬링 선수, 아내, 약사, 유치원 교사 등 어떤 역할을 하든 그녀의 연기로 관객의 시선을 사로잡는 방법이 있습니다. "마라톤", "댄싱퀸", "수상한 그녀" 등과 같은 영화에서 볼 수 있습니다.\n\n다음으로 배우로서의 그녀의 다재다능함에 대해 알아보자. 황우슬은 필모그래피에서 폭넓은 캐릭터를 소화하며 다양한 장르와 스타일로 연기력을 입증했다. 그녀는 맡은 역할에 따라 재미있거나 진지하거나 극적이거나 낭만적일 수 있습니다. 예를 들어 \'달콤한 인생\'에서는 가수로 조연으로 출연하며 가창력으로 관객들에게 깊은 인상을 남겼다. 그리고 \'풍수지리\'에서는 주술사 역할을 맡아 배우로서의 스펙트럼을 보여줬다.\n\n마지막으로, 황우슬이 그녀의 경력에서 직면한 도전과 그것을 극복하기 위한 그녀의 탄력성과 의지를 인정합시다. 그녀는 우울증과 불안에 대한 그녀의 투쟁과 그것이 그녀의 일과 개인 생활에 어떤 영향을 미쳤는지에 대해 공개했습니다. 하지만 이러한 어려움 속에서도 연기에 대한 열정을 이어가며 한국 영화계에 족적을 남겼다.\n\n아웃트로:\n오늘 영상은 여기까지 입니다. 황우슬의 필모그래피와 함께 즐거운 시간 되셨기를 바랍니다. 그녀의 영화를 확인하고 영화 연기의 예술에 감사하는 것을 잊지 마십시오. 이 비디오가 마음에 드셨다면 좋아요를 누르고 한국 영화와 배우에 대한 더 많은 통찰력과 리뷰를 보려면 저희 채널을 구독하세요. 시청해주셔서 감사합니다. 다음에 K-Movie Addicts에서 뵙겠습니다!\n',
  },
};
const VideoDetail: React.FC = () => {
  const { query } = useRouter();
  const { uid } = useAppSelector((state) => state.auth);
  const data = sampleData;
  const isLoading = false;

  /* const { data, isLoading } = useQuery(
    "video_detail",
    async () =>
      await VideoService.getVideoDetail({
        user: uid,
        video_id: query.video_id,
      }),
    { enabled: !!uid && !!query.video_id }
  ); */

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
    return <Loader />;
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

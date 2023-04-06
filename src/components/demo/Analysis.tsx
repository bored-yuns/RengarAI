import { useMemo, useState } from "react";

import { Flex } from "../common/View";
import { IVideoDetail } from "@/services/videos";
import { marked } from "marked";
import styled from "styled-components";

type AnalysisProps = {
  data: IVideoDetail;
};

type SelectedStyleProps = {
  selected: boolean;
};

const menu_list = [
  { key: "video_info", label: "요약 정보" },
  { key: "generated", label: "생성된 결과", tag: "ChatGPT" },
];

const Analysis = ({ data }: AnalysisProps) => {
  const [selected, setSelected] = useState(menu_list[0].key);
  const mdxEmbed = useMemo(() => {
    return {
      video_info: {
        summary: marked(data.video.summary),
        comment: marked(data.video.comment_summary),
      },
      generated: {
        title: marked(data.analysis.generated_title),
        summary: marked(data.analysis.generated_summary),
        script: marked(data.analysis.generated_script),
      },
    };
  }, [data]);

  return (
    <Wrapper>
      <MenuView>
        {menu_list.map((el, idx) => {
          const isSelected = selected === el.key;
          return (
            <MenuItem
              key={idx}
              selected={isSelected}
              onClick={() => setSelected(el.key)}
            >
              <Flex align="flex-start">
                {el.label}
                {el.tag && <TagView>{el.tag}</TagView>}
              </Flex>
              <MenuIndicator selected={isSelected} />
            </MenuItem>
          );
        })}
      </MenuView>
      {selected === "video_info" && (
        <>
          <ContentView>
            <ContentTitle>영상 요약</ContentTitle>
            <div
              className="mdx-embed"
              dangerouslySetInnerHTML={{ __html: mdxEmbed.video_info.summary }}
            />
          </ContentView>
          <ContentView>
            <ContentTitle>댓글 요약</ContentTitle>
            <div
              className="mdx-embed"
              dangerouslySetInnerHTML={{ __html: mdxEmbed.video_info.comment }}
            />
          </ContentView>
        </>
      )}
      {selected === "generated" && (
        <>
          <ContentView>
            <ContentTitle>추천 제목</ContentTitle>
            <div
              className="mdx-embed"
              dangerouslySetInnerHTML={{ __html: mdxEmbed.generated.title }}
            />
          </ContentView>
          <ContentView>
            <ContentTitle>생성된 영상 요약 정보</ContentTitle>
            <div
              className="mdx-embed"
              dangerouslySetInnerHTML={{ __html: mdxEmbed.generated.summary }}
            />
          </ContentView>
          <ContentView>
            <ContentTitle>생성된 영상 스크립트</ContentTitle>
            <div
              className="mdx-embed"
              dangerouslySetInnerHTML={{ __html: mdxEmbed.generated.script }}
            />
          </ContentView>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 42px;
`;

const MenuView = styled.div`
  width: 100%;
  display: flex;
`;

const MenuItem = styled.div<SelectedStyleProps>`
  font-size: ${(props) => (props.selected ? "17px" : "16px")};
  font-weight: 600;
  color: ${(props) => (props.selected ? "#fff" : "#a3a3a3")};
  margin-right: 24px;
  cursor: pointer;
  transition: all ease-in-out 200ms;
`;

const MenuIndicator = styled.div<SelectedStyleProps>`
  width: 100%;
  height: 3px;
  background-color: ${(props) => (props.selected ? "#806ffc" : "transparent")};
  border-radius: 999px;
  margin-top: 5px;
`;

const TagView = styled.div`
  padding: 6px 6px;
  background-color: #0d2e0d;
  border-radius: 7px;
  margin-left: 5px;
  font-size: 11px;
  font-weight: 700;
  color: #acffbc;
  margin-top: -5px;
`;

const ContentView = styled.div`
  width: 100%;
  padding: 24px;
  background-color: #252525;
  margin-top: 14px;
  border-radius: 18px;
  box-sizing: border-box;
`;

const ContentTitle = styled.div`
  width: fit-content;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 12px;
  box-shadow: inset 0 -12px 0 #9876ff4f;
`;

export default Analysis;

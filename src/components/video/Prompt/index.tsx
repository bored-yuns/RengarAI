import { IVideoDetail } from "@/services/videos";
import React from "react";
import { marked } from "marked";
import styled from "styled-components";

const ScriptView = styled.div`
  width: 100%;
  height: calc(100vh - 268px);
  border-radius: 24px;
  background-color: #f7f7f7;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0px 5px;

  @media only screen and (max-width: 1340px) {
    height: fit-content;
  }

  @media only screen and (max-width: 575px) {
    padding: 0px;
  }
`;

const ScriptContainer = styled.div`
  height: calc(100% - 48px);
  overflow-y: scroll;
  font-size: 17px;
  font-weight: 400;
  color: #343434;
  line-height: 1.7;
  margin: 24px 0px;
  padding: 0px 25px;

  @media only screen and (max-width: 1340px) {
    height: fit-content;
  }

  @media only screen and (max-width: 575px) {
    font-size: 15px;
    margin: 22px 0px;
    padding: 0px 22px;
  }
`;

type ScriptProps = {
  data: IVideoDetail;
};

export const PromptScript = ({ data }: ScriptProps) => {
  const mdScript = marked(data.video.summary);

  return (
    <ScriptView>
      <ScriptContainer dangerouslySetInnerHTML={{ __html: mdScript }} />
    </ScriptView>
  );
};

const MenuView = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  margin-bottom: 18px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const MenuItem = styled.li`
  width: 60%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 18px;
  background-color: #f9f8ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
  box-sizing: border-box;
  margin-right: 16px;
  cursor: pointer;
`;

const MenuTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2f1dd1;
  margin-bottom: 3px;

  @media only screen and (max-width: 575px) {
    font-size: 16px;
  }
`;

const MenuDesc = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #857cd0;

  @media only screen and (max-width: 575px) {
    font-size: 13px;
  }
`;

type PromptMenuProps = {
  data: IVideoDetail;
};

export const PromptMenu = () => {
  return (
    <MenuView>
      {Array(3)
        .fill({})
        .map((el, idx) => {
          return (
            <MenuItem key={idx}>
              <MenuTitle>영상 줄거리 요약</MenuTitle>
              <MenuDesc>Chat GPT가 영상을 요약해줍니다!</MenuDesc>
            </MenuItem>
          );
        })}
    </MenuView>
  );
};

const PromptView = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #343434;
  margin-bottom: 14px;

  @media only screen and (max-width: 575px) {
    font-size: 20px;
  }
`;

type PromptProps = {
  data: IVideoDetail;
};

const Prompt = ({ data }: PromptProps) => {
  return (
    <PromptView>
      <Title>영상 요약</Title>
      <PromptMenu />
      <PromptScript data={data} />
    </PromptView>
  );
};

export default Prompt;

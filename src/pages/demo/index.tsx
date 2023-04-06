import { useEffect, useState } from "react";

import Head from "next/head";
import Records from "@/components/demo/Records";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/useRedux";
import { useRouter } from "next/router";

type SearchStyleProps = {
  isActive: boolean;
};

const DemoPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [videoURL, setVideoURL] = useState<string>("");
  const { name } = useAppSelector((state) => state.auth);

  const loadRecord = async () => {
    if (typeof window !== "undefined") {
      const record = localStorage.getItem("@video_records");
      if (record) {
        const parsed = JSON.parse(record);
        setRecords(parsed);
      } else {
        setRecords([]);
      }
    }
  };

  useEffect(() => {
    loadRecord();
  }, []);

  const extractVideoId = (url: string) => {
    const regex =
      /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})$/;
    const match = url.match(regex);
    if (match) return match[1];
    else return null;
  };

  const handleSearch = () => {
    const videoId = extractVideoId(videoURL);
    if (!videoId) {
      alert("유효하지 않은 URL입니다.");
      return;
    }
    return router.push(`/demo/video/${videoId}`);
  };

  return (
    <>
      <Head>
        <title>메인 | Rengar AI</title>
        <meta name="description" content="Rengar AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header>
          <Title>👋 안녕하세요, {name}님</Title>
          <SubText>AI 영상 분석과 ChatGPT 스크립트 생성 툴</SubText>
          <SearchBar>
            <Input
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              placeholder="분석할 유튜브 영상의 URL을 입력해주세요"
              onSubmit={handleSearch}
            />
            <SearchButton
              isActive={videoURL.length > 0}
              onClick={() => videoURL.length > 0 && handleSearch()}
            >
              분석
            </SearchButton>
          </SearchBar>
        </Header>
        {records && records.length > 0 && (
          <Records record={records} refetch={loadRecord} />
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 18px;
  box-sizing: border-box;
  background-color: #1a191d;
`;

const Header = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;

  @media only screen and (max-width: 575px) {
    font-size: 27px;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #8d8c8c;

  @media only screen and (max-width: 575px) {
    font-size: 15px;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  border-radius: 999px;
  background-color: #232226;
  outline: none;
  margin-top: 42px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid transparent;

  :hover {
    background-color: #23222655;
    border: 2px solid #353339;
  }

  @media only screen and (max-width: 575px) {
    height: 54px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  padding: 0px 24px;
  box-sizing: border-box;
  background-color: transparent;

  @media only screen and (max-width: 575px) {
    font-size: 14px;
  }
`;

const SearchButton = styled.div<SearchStyleProps>`
  margin: 7px;
  width: 45px;
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#fff" : "#5b5b5b")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 14px;
  height: calc(100% - 14px);
  border-radius: 999px;
  background-color: ${(props) => (props.isActive ? "#503d89" : "#333238")};
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};

  @media only screen and (max-width: 575px) {
    font-size: 14px;
  }
`;

export default DemoPage;

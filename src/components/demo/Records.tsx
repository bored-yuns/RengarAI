import { IVideoDetail } from "@/services/videos";
import Link from "next/link";
import styled from "styled-components";

type RecordsProps = {
  record: IVideoDetail[];
  refetch: () => void;
};

const Records = ({ record = [], refetch }: RecordsProps) => {
  const removeRecords = () => {
    localStorage.removeItem("@video_records");
    refetch();
  };

  if (record && record.length > 0) {
    return (
      <Wrapper>
        <Header>
          <Title>최근 조회 기록</Title>
          <Button onClick={removeRecords}>전체 삭제</Button>
        </Header>
        {record.map((el, idx) => {
          return (
            <Link key={idx} href={`/demo/video/${el.video.video_id}`}>
              <VideoView>
                <ThumbnailMask>
                  <Content>
                    <VideoTitle className="text-ellipsis">
                      {el.video.title}
                    </VideoTitle>
                    <Button>분석하러 가기</Button>
                  </Content>
                </ThumbnailMask>
                <Thumbnail
                  src={`https://img.youtube.com/vi/${el.video.video_id}/maxresdefault.jpg`}
                />
              </VideoView>
            </Link>
          );
        })}
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;

  @media only screen and (max-width: 575px) {
    margin-bottom: 42px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #fff;

  @media only screen and (max-width: 575px) {
    font-size: 21px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoView = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 22px;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    margin-left: -18px;
    border-radius: 0px;
  }

  @media only screen and (max-width: 575px) {
    margin-bottom: 14px;
    margin-left: -18px;
    border-radius: 0px;
  }

  &:hover ${Thumbnail} {
    z-index: 0;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
`;

const ThumbnailMask = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: linear-gradient(0deg, #00000099 0%, #ffffff00 80%) no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Content = styled.div`
  width: 100%;
  padding: 28px 34px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px) brightness(80%);

  @media only screen and (max-width: 575px) {
    padding: 14px 18px;
  }
`;

const VideoTitle = styled.div`
  width: 70%;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;

  @media only screen and (max-width: 575px) {
    font-size: 16px;
  }
`;

const Button = styled.div`
  height: 42px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
  border-radius: 999px;
  background-color: #7c63c8;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 575px) {
    height: 38px;
    padding: 0px 12px;
    font-size: 14px;
  }
`;

export default Records;

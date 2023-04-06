import Head from "next/head";
import styled from "styled-components";
import useAuth from "@/hooks/useAuth";

const Auth = () => {
  const { signInGoogle } = useAuth();

  return (
    <>
      <Head>
        <title>로그인 | Rengar</title>
        <meta name="description" content="Rengar AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthView>
        <LogoImg src="/images/logo_icon.png" />
        <Title>Rengar에 오신것을 환영합니다</Title>
        <SubText>서비스를 이용하기 위해서는 로그인이 필요합니다</SubText>
        <Button onClick={signInGoogle}>Google로 로그인하기</Button>
      </AuthView>
    </>
  );
};

const AuthView = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  background-color: #1a191d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-bottom: 42px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 14px;

  @media only screen and (max-width: 575px) {
    font-size: 25px;
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

const Button = styled.div`
  width: 50%;
  height: 54px;
  margin-top: 42px;
  border-radius: 999px;
  background-color: #4b39b1;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: #4b39b145;
  }

  @media only screen and (max-width: 575px) {
    font-size: 15px;
  }
`;

export default Auth;

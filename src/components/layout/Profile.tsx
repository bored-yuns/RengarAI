import { DesktopView, Flex, MobileView, SplitView } from "../common/View";

import styled from "styled-components";
import { useAppSelector } from "@/hooks/useRedux";
import useAuth from "@/hooks/useAuth";

const Profile = () => {
  const { signInGoogle, signOut } = useAuth();
  const { avatarURL, isLoggedIn, name, email } = useAppSelector(
    (state) => state.auth
  );

  if (isLoggedIn === true) {
    return (
      <>
        <DesktopView>
          <div onClick={signOut}>
            <AvatarImg src={avatarURL} />
          </div>
        </DesktopView>
        <MobileView>
          <MbProfileView>
            <SplitView>
              <Flex>
                <AvatarImg src={avatarURL} />
                <MbInfo>
                  <MbName>{name}</MbName>
                  <MbEmail>{email}</MbEmail>
                </MbInfo>
              </Flex>
              <Tag>Beta User</Tag>
            </SplitView>
            <LogoutBtn onClick={signOut}>
              <LogoutText>로그아웃</LogoutText>
            </LogoutBtn>
          </MbProfileView>
        </MobileView>
      </>
    );
  } else {
    return (
      <>
        <DesktopView>
          <LoginButton onClick={signInGoogle}>로그인</LoginButton>
        </DesktopView>
        <MobileView>
          <MbProfileView>
            <div>
              <MbName style={{ marginBottom: 3 }}>로그인을 해주세요</MbName>
              <MbEmail>Rengar 이용을 위해서는 로그인이 필수입니다</MbEmail>
            </div>
            <LogoutBtn onClick={signInGoogle}>
              <LogoutText>로그인</LogoutText>
            </LogoutBtn>
          </MbProfileView>
        </MobileView>
      </>
    );
  }
};

const MbProfileView = styled.div`
  width: 100%;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e7e2ed;
`;

const MbInfo = styled.div`
  margin-left: 12px;
`;

const MbName = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #08004a;
`;

const MbEmail = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #706e80;
`;

const Tag = styled.div`
  padding: 10px 9px;
  background-color: #efffef;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 700;
  color: #00d627;

  @media only screen and (max-width: 575px) {
    padding: 8px 7px;
    font-size: 12px;
  }
`;

const LogoutBtn = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  margin-top: 16px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background: #f5f5ff;
  cursor: pointer;
`;

const LogoutText = styled.span`
  font-size: 14px;
  line-height: 1px;
  font-weight: 700;
  font-weight: 700;
  color: #08004a;
`;

const LoginButton = styled.div`
  padding: 0px 19px;
  height: 40px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.primary100};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;

const AvatarImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

export default Profile;

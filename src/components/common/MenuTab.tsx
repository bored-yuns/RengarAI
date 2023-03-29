import { Flex } from "./View";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const TabItem = styled.div`
  width: fit-content;
  font-size: 18px;
  font-weight: 600;
  color: #747383;
  margin-right: 24px;
`;

const Indicator = styled.div``;

const RangeView = styled.div`
  width: 100%;
  height: 1.2px;
  border-radius: 999px;
  background-color: #f0f0f0;
  margin-top: 8px;
`;

const MenuTab = () => {
  return (
    <Wrapper>
      <Flex>
        <TabItem>전체 채널</TabItem>
        <TabItem>전체 채널</TabItem>
      </Flex>
      <RangeView></RangeView>
    </Wrapper>
  );
};

export default MenuTab;

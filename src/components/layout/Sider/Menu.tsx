import Link from "next/link";
import { MENU_LIST } from "@/utils/constants";
import styled from "styled-components";
import { useRouter } from "next/router";

type MenuStyleProps = {
  selected?: boolean;
};

const MenuView = styled.div`
  width: 100%;
  padding: 34px 18px;
  box-sizing: border-box;
`;

const MenuItem = styled(Link)<MenuStyleProps>`
  width: 100%;
  height: 50px;
  display: flex;
  border-radius: 14px;
  align-items: center;
  padding: 0px 14px;
  box-sizing: border-box;
  margin-bottom: 5px;
  background: ${(props) => (props.selected ? "#f5f5ff" : "transparent")};
  cursor: pointer;

  :hover {
    background: #f5f5ff;
  }
`;

const MenuText = styled.span<MenuStyleProps>`
  font-size: 16px;
  line-height: 1px;
  font-weight: 700;
  font-weight: ${(props) => (props.selected ? 700 : 600)};
  color: #08004a;
  opacity: ${(props) => (props.selected ? 1 : 0.5)};
`;

const MenuIcon = styled.img<MenuStyleProps>`
  width: 19px;
  height: 18px;
  object-fit: contain;
  margin-right: 9px;
  opacity: 0.4;
  opacity: ${(props) => (props.selected ? 1 : 0.35)};
`;

const MenuList: React.FC = () => {
  const router = useRouter();

  return (
    <MenuView>
      {MENU_LIST.map((el) => {
        const selected = router.pathname === el.path;
        return (
          <MenuItem key={el.key} href={el.path} selected={selected}>
            <MenuIcon selected={selected} src={el.icon} />
            <MenuText selected={selected}>{el.label}</MenuText>
          </MenuItem>
        );
      })}
    </MenuView>
  );
};

export default MenuList;

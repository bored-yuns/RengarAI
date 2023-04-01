import { Flex } from "@/components/common/View";
import MenuList from "../Sider/Menu";
import Modal from "react-modal";
import Profile from "../Profile";
import React from "react";
import styled from "styled-components";

type MobileMenuProps = {
  modal: boolean;
  setModal: (visible: boolean) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ modal, setModal }) => {
  const requestClose = (event: any) => {
    event.preventDefault();
    setModal(false);
  };

  return (
    <Modal
      isOpen={modal}
      closeTimeoutMS={200}
      onRequestClose={requestClose}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          backdropFilter: "blur(7px)",
        },
        content: {
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0px",
          outline: "none",
          padding: "24px 18px",
        },
      }}
    >
      <Flex width="100%" justify="right">
        <CancelIcon onClick={requestClose} src="/images/close.svg" />
      </Flex>
      <Profile />
      <MenuList callback={requestClose} />
    </Modal>
  );
};

const CancelIcon = styled.img`
  width: 24px;
  object-fit: contain;
`;

export default MobileMenu;

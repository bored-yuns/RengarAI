import Modal from "react-modal";
import styled from "styled-components";

type ModalProps = {
  visible: boolean;
  setVisible: (val: boolean) => void;
};

const AddModal = ({ visible, setVisible }: ModalProps) => {
  const requestClose = (event: any) => {
    event.preventDefault();
    setVisible(false);
  };

  return (
    <Modal
      isOpen={visible}
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
          top: "140px",
          left: "240px",
          right: "240px",
          bottom: "140px",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "34px",
          outline: "none",
          padding: "20px",
        },
      }}
    ></Modal>
  );
};

export default AddModal;

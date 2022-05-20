import { IoMdClose } from "react-icons/io";
import { BackgroundModal, HeaderModal, ContainerModal } from "./styles";

type ModalProps = {
  setOpenModal: (setOpenModal: boolean) => void;
};

function Modal({ setOpenModal }: ModalProps) {
  return (
    <BackgroundModal>
      <ContainerModal>
        <HeaderModal>
          <h1>CREATE INTERN</h1>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <IoMdClose />
          </button>
        </HeaderModal>
      </ContainerModal>
    </BackgroundModal>
  );
}

export default Modal;

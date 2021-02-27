import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ViewUserForm from "../Forms/ViewUserForm";

type ViewModalProps = {
  user: any;
  modal: any;
  toggle: any;
};

const ViewModal: React.FC<ViewModalProps> = ({ user, modal, toggle }) => {
  console.log(toggle, "toggle");

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          Current User
        </ModalHeader>
        <ModalBody>
          <ViewUserForm user={user} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ViewModal;

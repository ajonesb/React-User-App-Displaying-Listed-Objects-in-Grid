import React from "react";
import AddUserForm from "../Forms/AddUserForm";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

type AddNewModelProps = {
  addUser: any;
  modal: any;
  toggle: any;
};

const AddNewModal: React.FC<AddNewModelProps> = ({
  addUser,
  modal,
  toggle,
}) => {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          Add New List
        </ModalHeader>
        <ModalBody>
          <AddUserForm addUser={addUser} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddNewModal;

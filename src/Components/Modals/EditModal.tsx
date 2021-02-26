import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditUserForm from "../Forms/EditUserForm";

type AddNewModelProps = {
  modal: any;
  toggle: any;
  editing: any;
  setEditing: any;
  updateUser: any;
  currentUser: any;
};

const EditModal: React.FC<AddNewModelProps> = ({
  modal,
  toggle,
  editing,
  setEditing,
  updateUser,
  currentUser,
}) => {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          Edit List
        </ModalHeader>
        <ModalBody>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            updateUser={updateUser}
            currentUser={currentUser}
            toggle={toggle}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditModal;

import React, { useState } from "react";
import data from "../Components/data/data";
import UserTable from "../Components/Tables/UserTable";
import { Button, Input, UncontrolledTooltip } from "reactstrap";
import AddNewModal from "../Components/Modals/AddNewModal";
import EditModal from "../Components/Modals/EditModal";
import ViewModal from "../Components/Modals/ViewModal";
import { FiSearch } from "react-icons/fi";
import { IUsers } from "../Components/interface";

const MainView: React.FC = () => {
  const Initial_State = {
    id: null,
    name: "",
    email: "",
    mobile: "",
  };

  const [users, setUsers] = useState(data);
  const [user, setUser] = useState(Initial_State);
  const [currentUser, setCurrentUser] = useState(Initial_State);
  const [editing, setEditing] = useState(false);
  const [view, setView] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    globalSearch();
  };

  const newUserModal = () => {
    setModal(!modal);
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setModal(false);
  };

  const viewUser = (user: any) => {
    setEditing(false);
    setView(!view);
    setUser(user);
  };

  const editUser = (user: IUsers) => {
    setEditing(!editing);
    setView(false);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  };

  const deleteUser = (id: null) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
    setView(false);
  };

  const clearList = (newArray: any) => {
    let clear = newArray;
    setUsers(clear);
  };

  const updateUser = (id: Number, updatedUser: any) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const globalSearch = () => {
    let filterData = users.filter((list) => {
      return (
        list.name.toLowerCase().includes(search.toLowerCase()) ||
        list.email.toLowerCase().includes(search.toLowerCase()) ||
        list.mobile.toLowerCase().includes(search.toLowerCase())
      );
    });
    setUsers(filterData);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="modal-container">
          <h1>My Users</h1>
          <div className="modals">
            <div className="header-container">
              <div className="searchField text-center">
                <Input
                  type="text"
                  name="search"
                  value={search}
                  onChange={handleChange}
                  className="searchInput"
                />
                <span className="searchIcon">
                  <FiSearch />
                </span>
              </div>
              <div className="addBtn">
                <Button onClick={newUserModal} color="success" id="adduser">
                  Add New User
                </Button>
                <UncontrolledTooltip placement="left" target="adduser">
                  Add New User
                </UncontrolledTooltip>
                <Button
                  onClick={() => clearList([])}
                  color="danger"
                  id="deleteuser"
                >
                  Clear
                </Button>
                <UncontrolledTooltip placement="right" target="deleteuser">
                  Delete All User
                </UncontrolledTooltip>
              </div>
            </div>
            {modal ? (
              <AddNewModal
                addUser={addUser}
                modal={modal}
                toggle={newUserModal}
              />
            ) : null}

            {editing ? (
              <EditModal
                modal={editing}
                setEditing={setEditing}
                toggle={editUser}
                updateUser={updateUser}
                currentUser={currentUser}
              />
            ) : null}
            {view ? (
              <ViewModal user={user} modal={view} toggle={viewUser} />
            ) : null}
          </div>
        </div>

        <div className="table-container">
          <UserTable
            users={users}
            editUser={editUser}
            deleteUser={deleteUser}
            viewUser={viewUser}
          />
        </div>
      </div>
    </div>
  );
};

export default MainView;

import React from "react";
import { Table, UncontrolledTooltip } from "reactstrap";

type UserTableProps = {
  users: any;
  viewUser: any;
  editUser: any;
  deleteUser: any;
};

const UserTable: React.FC<UserTableProps> = ({ users, viewUser, editUser, deleteUser }) => {
// const UserTable = ({ users, viewUser, editUser, deleteUser }) => {
  return (
    <>
      <Table className="text-center" striped responsive>
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr className="tablerowbg">
              <td colSpan={5} className="text-center">
                <strong>No Data</strong>
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td className="actionIcons">
                  <span className="viewIcon">
                    <i
                      className="far fa-eye fa-md"
                      onClick={() => viewUser(user)}
                      id="view"
                    ></i>
                    <UncontrolledTooltip placement="top" target="view">
                      View
                    </UncontrolledTooltip>
                  </span>
                  <span className="editIcon">
                    <i
                      className="fas fa-edit fa-md"
                      onClick={() => editUser(user)}
                      id="edit"
                    ></i>
                    <UncontrolledTooltip placement="top" target="edit">
                      Edit
                    </UncontrolledTooltip>
                  </span>
                  <span className="deleteIcon">
                    <i
                      className="fas fa-trash-alt fa-md"
                      onClick={() => deleteUser(user.id)}
                      id="delete"
                    ></i>
                    <UncontrolledTooltip placement="top" target="delete">
                      Delete
                    </UncontrolledTooltip>
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;

import React, { useState } from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

type AddUserFormProps = {
  addUser: any;
  toggle: any;
};

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser, toggle }) => {
  const initialState = { id: null, name: "", email: "", mobile: "" };

  const [user, setUser] = useState(initialState);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.persist();
    setUser(user);
    addUser(user);
    setUser(initialState);
  };
  return (
    <>
      <AvForm onValidSubmit={handleSubmit}>
        <AvField
          type="text"
          name="name"
          label="Name"
          placeholder="Enter Your Name"
          value={user.name}
          onChange={handleChange}
          validate={{
            required: { value: true, errorMessage: "Please Enter Name" },
            pattern: {
              value: "^[a-zA-Z0-9_ ]*$",
              errorMessage: "Your name must be composed only with letter",
            },
            minLength: {
              value: 5,
              errorMessage: "Your name must be between 5 and 16 characters",
            },
          }}
        />
        <AvField
          type="text"
          name="email"
          label="Email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={handleChange}
          validate={{
            required: { value: true, errorMessage: "Please Enter Email" },
            pattern: {
              value:
                "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
              errorMessage: "InValid Email",
            },
          }}
        />
        <AvField
          type="number"
          name="mobile"
          label="mobile Number"
          placeholder="Enter Your mobile Number"
          value={user.mobile}
          onChange={handleChange}
          validate={{
            required: {
              value: true,
              errorMessage: "Please Enter mobile Number",
            },
            pattern: {
              value: "^[0-9]+$",
              errorMessage: "Your name must be composed only with a Number",
            },
            minLength: {
              value: 10,
              errorMessage: "Your mobile Number Length must be 10",
            },
            maxLength: {
              value: 10,
              errorMessage: "Your mobile Number Length must be 10",
            },
          }}
        />

        <div className="addUserBtn">
          <Button color="success">Add User</Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </div>
      </AvForm>
    </>
  );
};

export default AddUserForm;

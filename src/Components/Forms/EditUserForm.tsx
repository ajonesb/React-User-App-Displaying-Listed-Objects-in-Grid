import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const EditUserForm: React.FC = ( props: any ) => {
  const { currentUser, updateUser, toggle } = props;
  const [user, setUser] = useState(currentUser);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser(user.id, user);
  };

  return (
    <>
      <AvForm onSubmit={handleSubmit}>
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
              value: "^[A-Za-z]+$",
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
                "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
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
              errorMessage: "Your name must be composed only with Number",
            },
            minLength: {
              value: 10,
              errorMessage: "Your mobile Number Length must be 10",
            },
          }}
        />
        <div className="editFormBtn">
          <Button color="success">Update User</Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </div>
      </AvForm>
    </>
  );
};

export default EditUserForm;

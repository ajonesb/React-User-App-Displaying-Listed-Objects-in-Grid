import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

type ViewUserFormProps = {
  user: any;
  toggle: any;
};

const ViewUserForm: React.FC<ViewUserFormProps> = ({ user, toggle }) => {
  // const ViewUserForm = ({ user, toggle }) => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="name" value={user.name || ""} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={user.email || ""} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>mobile Number</Label>
          <Input
            type="number"
            name="mobile"
            value={user.mobile || ""}
            readOnly
          />
        </FormGroup>
        <Button color="danger" onClick={toggle}>
          Close
        </Button>
      </Form>
    </>
  );
};

export default ViewUserForm;

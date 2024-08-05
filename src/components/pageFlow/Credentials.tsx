import React from "react";

import { Button } from "@/common/io/Button";
import { Text } from "@/common/io/Text";
import { required } from "@/common/validators";
import { createFormData } from "@/services/formService";

const Credentials = (props: any) => {
  const handleSubmit = async () => {
    const username = props.formValues.username;
    const firstname = props.formValues.firstname;
    const lastname = props.formValues.lastname;
    const mobileno = props.formValues.mobileno;
    props.onSubmit();
    await createFormData({
      username,
      firstname,
      lastname,
      mobileno,
    });
  };

  const handleSubmitPageFlow = async () => {
    const data = props.formValues;
    props.onSubmit();
    await createFormData(data);
  };

  console.log("Credentials", props);
  return (
    <div>
      <h1>{props.page.name}</h1>
      <h1>{props.page.caption}</h1>
      <Text
        name="mobileno"
        label="mobileno"
        validate={required}
        variant="standard"
        required
        autoComplete="off"
      />
      <Button onClick={props.onCancel}>Cancel</Button>
      <Button
        type="submit"
        onClick={() => {
          handleSubmitPageFlow();
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Credentials;

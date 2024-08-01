import React from "react";

import { Button } from "@/common/io/Button";
import { Text } from "@/common/io/Text";
import { required } from "@/common/validators";
import { createFormData } from "@/services/formService";

const Credentials = (props: any) => {
  const handleSubmit = async () => {
    props.onSubmit();
    await createFormData({
      username: props.formValues.username,
      firstname: props.formValues.firstname,
      lastname: props.formValues.lastname,
      mobileno: props.formValues.mobileno,
    });
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
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Credentials;

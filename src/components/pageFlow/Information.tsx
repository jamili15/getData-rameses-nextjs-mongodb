import React from "react";
import Credentials from "./Credentials";
import { Text } from "@/common/io/Text";
import { required } from "@/common/validators";
import { Button } from "@/common/io/Button";

const Information = (props: any) => {
  console.log(props);
  return (
    <div>
      <h1>{props.page.name}</h1>
      <h1>{props.page.caption}</h1>
      <Text
        name="firstname"
        label="firstname"
        validate={required}
        variant="standard"
        required
        autoComplete="off"
      />
      <Text
        name="lastname"
        label="lastname"
        validate={required}
        variant="standard"
        required
        autoComplete="off"
      />
      <Button type="submit">Next</Button>
    </div>
  );
};

export default Information;

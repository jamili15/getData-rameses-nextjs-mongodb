import React from "react";
import Information from "./Information";
import { Text } from "@/common/io/Text";
import { required } from "@/common/validators";
import { Button } from "@/common/io/Button";

const Login = (props: any) => {
  return (
    <div>
      <h1>{props.page.name}</h1>
      <h1>{props.page.caption}</h1>

      <Text
        name="username"
        label="username"
        validate={required}
        variant="standard"
        required
        autoComplete="off"
      />
      <Button type="submit">Next</Button>
    </div>
  );
};

export default Login;

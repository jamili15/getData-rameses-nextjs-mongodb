import CreateForm from "@/components/CreateForm";
import FormList from "@/components/FormList";
import { getExampleData } from "@/services/formService";
import React from "react";

const page = async () => {
  const groups = await getExampleData();

  console.log("GROUPS", groups);

  return (
    <div>
      <FormList lists={groups} />
      <CreateForm />
    </div>
  );
};

export default page;

import FormList from "@/components/pageFlow/FormList";
import PageForm from "@/components/pageFlow/PageForm";
import { getFormData } from "@/services/formService";
import React from "react";

const page = async () => {
  const groups = await getFormData();

  console.log("DATA", groups);
  return (
    <div>
      <PageForm />
      <FormList datas={groups} />
    </div>
  );
};

export default page;

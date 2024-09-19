import CreateForm from "@/components/CreateForm";
import FormList from "@/components/FormList";
import SearchForm from "@/components/Search";
import { getExampleData } from "@/services/formService";
import FormData from "@/components/FormData";
import React from "react";

interface HomeProps {
  params?: { [key: string]: any };
  searchParams: URLSearchParams;
}

const page: React.FC<HomeProps> = async ({ params, searchParams }) => {
  const groups = await getExampleData(searchParams);

  console.log("GROUPS", groups);

  return (
    <div>
      <FormList lists={groups} />
      <SearchForm />
      {/* <CreateForm /> */}
      <FormData />
    </div>
  );
};

export default page;

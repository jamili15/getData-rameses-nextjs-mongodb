"use client";

import PageFlow from "@/common/ui/PageFlow";
import Credentials from "@/components/pageFlow/Credentials";
import Information from "@/components/pageFlow/Information";
import Login from "@/components/pageFlow/Login";
import React from "react";

interface PageProps {}

const page: React.FC<PageProps> = () => {
  const pages = [
    {
      name: "Login",
      caption: "Login",
      Component: Login,
      options: {},
    },
    {
      name: "Information",
      caption: "Information",
      Component: Information,
      options: {},
    },
    {
      name: "Credentials",
      caption: "Credentials",
      Component: Credentials,
      options: {},
    },
  ];

  return (
    <div>
      <PageFlow title={""} pages={pages} />
    </div>
  );
};

export default page;

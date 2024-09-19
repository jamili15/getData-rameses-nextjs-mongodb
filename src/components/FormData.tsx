"use client";

import { createFormData } from "@/_actions/service";
import React, { useRef } from "react";

const FormData = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form action={createFormData} className="flex gap-2">
      <input
        type="text"
        name="name"
        placeholder="firstname"
        className="border-2 border-black rounded pl-2"
        required
      />
      <input
        type="text"
        name="age"
        placeholder="age"
        className="border-2 border-black rounded pl-2"
        required
      />
      <button type="submit" className="bg-green-400 rounded p-2">
        Create
      </button>
    </form>
  );
};

export default FormData;

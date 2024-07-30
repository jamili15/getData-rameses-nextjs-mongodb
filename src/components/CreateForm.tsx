"use client";

import React, { useState, useEffect } from "react";
import { createExampleData, updateExampleData } from "@/services/formService";
import { useMyContext } from "@/context/Provider";

const CreateForm = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);
  const { editList, setEditList } = useMyContext();

  useEffect(() => {
    if (editList) {
      setName(editList.name);
      setAge(editList.age);
    }
  }, [editList]);

  const createData = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (editList) {
        await updateExampleData({ _id: editList._id, name, age });
      } else {
        await createExampleData({ name, age });
      }

      setEditList(null);
      setName("");
      setAge(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={createData}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-300 border-2 rounded bg-gray-100"
            required
          />
        </label>
        <label htmlFor="age">
          <p>Age</p>
          <input
            type="number"
            id="age"
            value={age?.toString()}
            onChange={(e) =>
              setAge(
                e.target.value === "" ? null : parseInt(e.target.value, 10)
              )
            }
            className="border-gray-300 border-2 rounded bg-gray-100"
            required
          />
        </label>
        <button type="submit" className="p-1 ml-2 bg-blue-200 rounded">
          {editList ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateForm;

"use client";

import React from "react";
import { deleteExampleData } from "@/services/formService";
import { useMyContext } from "@/context/Provider";

interface CardProps {
  list: Record<string, any>;
}

const FormCard: React.FC<CardProps> = ({ list }) => {
  const { setEditList } = useMyContext();

  const deleteData = async () => {
    if (window.confirm("Are you sure you want to delete")) {
      await deleteExampleData({
        _id: list?._id,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <p>Firstname: {list?.name}</p>
        <p>Age: {list?.age}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setEditList(list)}
          className="p-1 bg-yellow-200 rounded"
        >
          update
        </button>
        <button onClick={deleteData} className="p-1 bg-red-200 rounded">
          delete
        </button>
      </div>
    </div>
  );
};

export default FormCard;

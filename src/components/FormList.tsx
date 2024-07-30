import React from "react";
import FormCard from "./FormCard";

interface FormProps {
  lists: any[];
}

const FormList: React.FC<FormProps> = ({ lists }) => {
  return (
    <div>
      {lists.map((list: any) => (
        <FormCard key={list._id} list={list} />
      ))}
    </div>
  );
};

export default FormList;

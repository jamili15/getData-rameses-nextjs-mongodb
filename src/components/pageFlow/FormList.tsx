import React from "react";
import FormCard from "./FormCard";

interface FormListProps {
  datas: any[];
}

const FormList: React.FC<FormListProps> = ({ datas }) => {
  return (
    <div>
      {datas.map((data: any) => (
        <FormCard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default FormList;

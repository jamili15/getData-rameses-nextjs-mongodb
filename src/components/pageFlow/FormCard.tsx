import React from "react";

interface FormCardProps {
  data: any;
}

const FormCard: React.FC<FormCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1>{data.username}</h1>
      <h1>{data.firstname}</h1>
      <h1>{data.lastname}</h1>
      <h1>{data.mobileno}</h1>
    </div>
  );
};

export default FormCard;

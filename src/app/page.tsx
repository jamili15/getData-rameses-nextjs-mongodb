"use client";

import { lookupService } from "@/lib/client";
import { useState } from "react";

export default function Home() {
  const svc = lookupService("exampleService");
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<any | null>(null);

  const fetchData = async () => {
    const res = await svc?.invoke("getExampleData");
    if (!res || res.error) {
      setError(res.error);
    } else {
      setData(res);
    }
  };

  const createData = async () => {
    const res = await svc?.invoke("createExampleData");
    return res;
  };

  const updateData = async () => {
    const res = await svc?.invoke("updateExampleData");
    return res;
  };

  const deleteData = async () => {
    const res = await svc?.invoke("deleteExampleData");
    return res;
  };

  return (
    <div className="pl-2">
      Home
      {error && <h1>{error.errorResponse.errmsg}</h1>}
      {data?.map((datas: any) => (
        <div key={datas._id}>
          {datas.id} - {datas.title} - {datas.number}
        </div>
      ))}
      <div className="flex gap-2">
        <button onClick={fetchData} className="p-1 bg-green-200 rounded">
          fetched
        </button>
        <button onClick={createData} className="p-1 bg-blue-200 rounded">
          Insert
        </button>

        <button onClick={updateData} className="p-1 bg-yellow-200 rounded">
          update
        </button>
        <button onClick={deleteData} className="p-1 bg-red-200 rounded">
          delete
        </button>
      </div>
    </div>
  );
}

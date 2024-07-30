"use client";

import { lookupService } from "@/lib/client";
import { useState } from "react";

export default function Home() {
  const svc = lookupService("exampleService");
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<any | null>(null);

  const handleClick = async () => {
    const res = await svc?.invoke("getExampleData");
    if (!res || res.error) {
      setError(res.error);
    } else {
      setData(res);
    }
  };

  return (
    <div>
      Home
      {error && <h1>{error.errorResponse.errmsg}</h1>}
      {data?.map((datas: any) => (
        <div key={datas._id}>
          {datas.title} - {datas.number}
        </div>
      ))}
      <button onClick={handleClick}>click</button>
    </div>
  );
}

"use client";

import useCustomRouter from "@/hooks/useCustomRouter";
import Link from "next/link";
import React, { FormEvent } from "react";

const SearchForm = () => {
  const { pushQuery, query } = useCustomRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search") as string | undefined;
    pushQuery({ search });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          <input
            type="search"
            name="search"
            placeholder="search"
            className="border-gray-300 border"
            defaultValue={query.search || ""}
          />
          <button type="submit">Search</button>
          <Link href={"/"}>
            <button type="submit">Back</button>
          </Link>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;

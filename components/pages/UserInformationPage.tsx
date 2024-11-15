"use client";
import { databaseRows } from "@/data/users/rows";
import React, { Suspense, useMemo, useState } from "react";
import SearchBar from "../SearchBar";
import DatabaseTable from "../ui/tables/DatabaseTable";
import Loading from "@/components/ui/loading-ui/SpinnerLoading";

export default function UserInformationPage() {
  const [searchValue, setSearchValue] = useState("");
  
  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = useMemo(() => {
    return databaseRows.filter((user) =>
      user.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar filterValue={searchValue} onSearchChange={onSearchChange} />

      <Suspense fallback={<Loading />}>
        <div className="flex w-[90vw] lg:w-[70vw] xl:w-[75vw] 2xl:w-[80vw] h-[70vh] bg-white mb-24 ">
          <DatabaseTable databaseRows={filteredItems} />
        </div>
      </Suspense>
    </div>
  );
}

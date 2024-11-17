"use client";
import { dashboardRows } from "@/data/users/rows";
import React, { Suspense, useMemo, useState } from "react";
import SearchBar from "../SearchBar";
import DashboardTable from "../ui/tables/DashboardTable";
import Loading from "@/components/ui/loading-ui/SpinnerLoading";

export default function UserTransactionPage() {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = useMemo(() => {
    return dashboardRows.filter((user) =>
      user.fullName.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <SearchBar filterValue={searchValue} onSearchChange={onSearchChange} />

      <Suspense fallback={<Loading />}>
        <div className="flex w-[90vw] lg:w-[70vw] xl:w-[75vw] 2xl:w-[80vw] h-[70vh] bg-white mb-24 ">
          <DashboardTable
            dashboardRows={filteredItems}
            isUserIdClickable={false}
          />
        </div>
      </Suspense>
    </div>
  );
}

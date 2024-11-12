"use client";
import DashboardTable from "@/components/ui/DashboardTable";

import React, { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { dashboardRows } from "@/data/users/rows";

export default function DashboardPage() {
  const [filterValue, setFilterValue] = useState("");

  const onSearchChange = (value: string) => {
    setFilterValue(value);
  };

  const filteredItems = useMemo(() => {
    return dashboardRows.filter((user) =>
      user.fullName.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filterValue]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar filterValue={filterValue} onSearchChange={onSearchChange} />

      <div className="flex w-[80vw] h-[70vh] bg-white mb-24">
        <DashboardTable dashboardRows={filteredItems} />
      </div>
    </div>
  );
}

"use client";
import DashboardTable from "@/components/ui/DashboardTable";

import React, { Suspense, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { dashboardRows } from "@/data/users/rows";
import Loading from "@/components/ui/loading-ui/SpinnerLoading";

interface DashboardPageProps {
  statusFilter: string; 
  setStatusFilter: (filter: string) => void; 
}

export default function DashboardPage({ statusFilter }: DashboardPageProps) {
  const [filterValue, setFilterValue] = useState("");

  const onSearchChange = (value: string) => {
    setFilterValue(value);
  };

  const filteredItems = useMemo(() => {
    const filtered = dashboardRows.filter((user) => {
      const matchesSearch = user.fullName
        .toLowerCase()
        .includes(filterValue.toLowerCase());
      const matchesStatus =
        statusFilter === "ALL" || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    return filtered;
  }, [filterValue, statusFilter]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar filterValue={filterValue} onSearchChange={onSearchChange} />

      <Suspense fallback={<Loading />}>
        <div className="flex w-[90vw] lg:w-[70vw] xl:w-[75vw] 2xl:w-[80vw] h-[70vh] bg-white mb-24">
          <DashboardTable dashboardRows={filteredItems} />
        </div>
      </Suspense>
    </div>
  );
}

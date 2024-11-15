"use client";
import DashboardTable from "@/components/ui/tables/DashboardTable";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { dashboardRows } from "@/data/users/rows";
import Loading from "@/components/ui/loading-ui/SpinnerLoading";
import { useButtonContext } from "../../context/ButtonContext";

export default function DashboardPage() {
  const { setButtons } = useButtonContext(); // Access the setButtons function to update buttons
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  useEffect(() => {
    setButtons([
      {
        text: "ALL",
        onClick: () => setStatusFilter("ALL"),
        isActive: statusFilter === "ALL",
      },
      {
        text: "PENDING",
        onClick: () => setStatusFilter("PENDING"),
        isActive: statusFilter === "PENDING",
      },
      {
        text: "TO RECEIVE",
        onClick: () => setStatusFilter("TO RECEIVE"),
        isActive: statusFilter === "TO RECEIVE",
      },
      {
        text: "COMPLETED",
        onClick: () => setStatusFilter("COMPLETED"),
        isActive: statusFilter === "COMPLETED",
      },
      {
        text: "DECLINED",
        onClick: () => setStatusFilter("DECLINED"),
        isActive: statusFilter === "DECLINED",
      },
    ]);
  }, [setButtons, statusFilter]);

  const filteredItems = useMemo(() => {
    return dashboardRows.filter((user) => {
      const matchesSearch = user.fullName
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesStatus =
        statusFilter === "ALL" || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchValue, statusFilter]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar filterValue={searchValue} onSearchChange={setSearchValue} />

      <Suspense fallback={<Loading />}>
        <div className="flex w-[90vw] lg:w-[70vw] xl:w-[75vw] 2xl:w-[80vw] h-[70vh] bg-white mb-24">
          <DashboardTable dashboardRows={filteredItems} />
        </div>
      </Suspense>
    </div>
  );
}

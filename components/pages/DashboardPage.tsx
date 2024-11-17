"use client";
import DashboardTable from "@/components/ui/tables/DashboardTable";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { dashboardRows } from "@/data/users/rows";
import Loading from "@/components/ui/loading-ui/SpinnerLoading";
import { useButtonContext } from "../../context/ButtonContext";
import { Button } from "@nextui-org/button";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function DashboardPage() {
  const { setButtons } = useButtonContext(); // Access the setButtons function to update buttons
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const items = useMemo(
    () => [
      { key: "ALL", label: "ALL" },
      { key: "PENDING", label: "PENDING" },
      { key: "COMPLETED", label: "COMPLETED" },
      { key: "TO RECEIVE", label: "TO RECEIVE" },
      { key: "DECLINED", label: "DECLINED" },
    ],
    []
  );

  useEffect(() => {
    setButtons(
      items.map((item) => ({
        text: item.label,
        onClick: () => setStatusFilter(item.key),
        isActive: statusFilter === item.key,
      }))
    );
  }, [items, setButtons, statusFilter]);

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
    <div className="flex flex-col items-center w-full h-screen">
      <SearchBar filterValue={searchValue} onSearchChange={setSearchValue} />

      <Dropdown className="bg-blue-400">
        <DropdownTrigger>
          <Button isIconOnly className="flex lg:hidden bg-blue-400 text-white" title="Dashboard Sidebar Button">
            <RxHamburgerMenu size={18}/>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dashboard Sidebar"
          items={items}
          onAction={(key) => setStatusFilter(key as string)}
        >
          {(item) => (
            <DropdownItem
              key={item.key}
              className={`font-bebas text-white ${
                statusFilter === item.key ? "bg-white text-blue-400" : ""
              }`}
            >
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

      <Suspense fallback={<Loading />}>
        <div className="flex w-[90vw] lg:w-[70vw] xl:w-[75vw] 2xl:w-[80vw] h-[70vh] bg-white mt-4">
          <DashboardTable dashboardRows={filteredItems} />
        </div>
      </Suspense>
    </div>
  );
}

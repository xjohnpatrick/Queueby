"use client";
import { databaseRows } from "@/data/users/rows";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import SearchBar from "../SearchBar";
import DatabaseTable from "../ui/tables/DatabaseTable";
import Loading from "@/components/ui/loading-ui/SpinnerLoading";
import { useButtonContext } from "@/context/ButtonContext";

export default function UserInformationPage() {
  const [searchValue, setSearchValue] = useState("");
  const { setButtons } = useButtonContext();
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    setButtons([
      {
        text: "User Information",
        onClick: () => {
          console.log("User Information");
          setActiveButton("User Information");
        },
        href: "",
        isActive: activeButton === "User Information",
      },
      {
        text: "User Transaction",
        onClick: () => {
          console.log("User Transaction");
          setActiveButton("User Transaction");
        },
        href: "/main/user-transaction",
        isActive: activeButton === "User Transaction",
      },
      {
        text: "Announcement",
        onClick: () => {
          console.log("Announcement");
          setActiveButton("Announcement");
        },
        href: "",
        isActive: activeButton === "Announcement",
      },
      {
        text: "Barangay Officials",
        onClick: () => {
          console.log("Barangay Officials");
          setActiveButton("Barangay Officials");
        },
        href: "",
        isActive: activeButton === "Barangay Officials",
      },
    ]);
  }, [setButtons]);
  
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

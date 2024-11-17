"use client";
import { Input } from "@nextui-org/input";
import { IoIosSearch } from "react-icons/io";
import React from "react";

interface SearchBarProps {
  filterValue: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({
  filterValue,
  onSearchChange,
}: SearchBarProps) {
  const onClear = React.useCallback(() => {
    onSearchChange("");
  }, [onSearchChange]);

  return (
    <div>
      <div className="relative flex my-10 w-[320px] sm:w-[380px] md:w-[450px] lg:w-[540px] font-montserrat">
        <Input
          placeholder="Search Name Here"
          variant="bordered"
          value={filterValue}
          onClear={onClear}
          onValueChange={onSearchChange}
          size="lg"
          color="primary"
        />
        <div
          aria-label="Search"
          className="flex items-center justify-center w-10 h-7 absolute right-1 top-1/2 transform -translate-y-1/2 border-l border-gray-400"
        >
          {!filterValue && <IoIosSearch size={22} color="#928C8C" />}
        </div>
      </div>
    </div>
  );
}

"use client";
import { Input } from "@nextui-org/input";
import { IoIosSearch } from "react-icons/io";
import React from "react";

export default function SearchBar() {
  return (
    <div>
      <div className="relative flex my-10 w-[320px] sm:w-[380px] md:w-[450px] lg:w-[580px] font-montserrat">
        <Input
          className=""
          placeholder="Search Here"
          variant="bordered"
          size="lg"
        />
        <button
          aria-label="Search"
          className="flex items-center justify-center w-10 h-7 absolute right-1 top-1/2 transform -translate-y-1/2 border-l border-gray-400"
        >
          <IoIosSearch size={22} color="#928C8C" />
        </button>
      </div>
    </div>
  );
}

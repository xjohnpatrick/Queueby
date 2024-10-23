import DatabaseTable from "@/components/ui/DatabaseTable";

import { IoIosSearch } from "react-icons/io";

import { Input } from "@nextui-org/input";

import React from "react";

const Database = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="relative flex mb-14 w-[380px] lg:w-[580px] font-montserrat">
        <Input
          className=""
          placeholder="Search Here"
          variant="bordered"
          size="lg"
        />
        <button className="flex items-center justify-center w-10 h-7 absolute right-1 top-1/2 transform -translate-y-1/2 border-l border-gray-400">
          <IoIosSearch size={22} color="#928C8C" />
        </button>
      </div>

      <div className="flex w-[80vw] h-[70vh] bg-white mb-24 ">
        <DatabaseTable />
      </div>
    </div>
  );
};

export default Database;

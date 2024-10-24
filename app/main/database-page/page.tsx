import DatabaseTable from "@/components/ui/DatabaseTable";
import React from "react";
import SearchBar from "@/components/SearchBar";

const Database = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar />

      <div className="flex w-[80vw] h-[70vh] bg-white mb-24 ">
        <DatabaseTable />
      </div>
    </div>
  );
};

export default Database;

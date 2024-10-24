import DashboardTable from "@/components/ui/DashboardTable";

import React from "react";
import SearchBar from "@/components/SearchBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar />

      <div className="flex w-[80vw] h-[70vh] bg-white mb-24">
        <DashboardTable />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Document from "@/components/Document";

const BarangayPermit = () => {
  return (
    <div className="flex flex-col h-screen md:h-full lg:h-[1550px] w-full items-center">
      <h1 className="flex text-4xl font-semibold my-8 font-montserrat">
        Barangay Permit
      </h1>

      <Document title="Barangay Permit" />
    </div>
  );
};

export default BarangayPermit;

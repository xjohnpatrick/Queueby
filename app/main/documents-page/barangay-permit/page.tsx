import React from "react";
import Document from "@/components/Document";

const BarangayPermit = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="flex text-4xl font-semibold my-8 font-montserrat text-center no-print">
        Barangay Permit
      </h1>

      <Document title="Barangay Permit" />
    </div>
  );
};

export default BarangayPermit;

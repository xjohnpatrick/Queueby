import React from "react";
import Document from "@/components/Document";

const CertificateOfClearance = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="flex text-4xl font-semibold my-8 font-montserrat text-center no-print">
        Barangay Clearance
      </h1>

      <Document title="Barangay Clearance" />
    </div>
  );
};

export default CertificateOfClearance;

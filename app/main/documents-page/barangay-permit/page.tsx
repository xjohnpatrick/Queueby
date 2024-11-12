import React, { Suspense } from "react";
import Document from "@/components/Document";
import Loading from "../../../../components/ui/loading-ui/SpinnerLoading";

const BarangayPermit = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="flex text-4xl font-semibold my-8 font-montserrat text-center no-print">
        Barangay Permit
      </h1>
      <Suspense fallback={<Loading />}>
        <Document title="Barangay Permit" />
      </Suspense>
    </div>
  );
};

export default BarangayPermit;

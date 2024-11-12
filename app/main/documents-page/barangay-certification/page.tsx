import React, { Suspense } from "react";
import Document from "@/components/Document";
import Loading from "../../../../components/ui/loading-ui/SpinnerLoading";

const BarangayCertification = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="flex text-4xl font-semibold my-8 font-montserrat text-center no-print">
        Barangay Certification
      </h1>
      <Suspense fallback={<Loading />}>
        <Document title="Barangay Certification" />
      </Suspense>
    </div>
  );
}

export default BarangayCertification
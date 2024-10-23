import React from "react";
import { montserrat } from '@/app/fonts/fonts'
import Document from "@/components/Document";

const BarangayCertification = () => {
  return (
    <div className="flex flex-col h-[1550px] w-full items-center">
      <h1
        className={`flex text-4xl font-semibold my-8 ${montserrat.className}`}
      >
        Barangay Certification
      </h1>

      <Document title="Barangay Certification" />
    </div>
  );
}

export default BarangayCertification
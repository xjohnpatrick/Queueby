import React from "react";
import { montserrat } from "@/app/fonts/fonts";
import Document from "@/components/Document";

const BarangayCertFirstTimeJobSeeker = () => {
  return (
    <div className="flex flex-col h-[1550px] w-full items-center">
      <h1
        className={`flex text-4xl font-semibold my-8 ${montserrat.className}`}
      >
        Barangay Certicate for First Time Job Seeker
      </h1>

      <Document title="Barangay Certicate for First Time Job Seeker" />
    </div>
  );
};

export default BarangayCertFirstTimeJobSeeker;

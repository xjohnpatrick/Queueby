import React from 'react'
import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="w-full h-[450px] sm:h-[600px] md:h-[800px] lg:h-[1123px] flex items-center justify-center">
      <Spinner label="Loading..." color="primary" size='lg'/>
    </div>
  );
}

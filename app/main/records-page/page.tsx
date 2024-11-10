import DashboardTable from '@/components/ui/DashboardTable'
import { Button } from '@nextui-org/button'
import Image from 'next/image';
import makatiImg from "@/public/makati.png"
import comemboImg from "@/public/comembo.png"

import React from 'react'

const Records = () => {

  return (
    <div className="flex flex-col items-center w-full h-[1100px]">
      <h1 className="flex text-4xl font-semibold my-8 font-montserrat text-center">
        Viewing All Records
      </h1>

      <div className="flex flex-col w-[340px] sm:w-[600px] lg:w-[780px] xl:w-[1000px] h-[780px] border border-black">
        <div className="h-1/4 lg:h-1/3">
          <div className="flex relative items-center justify-center">
            <div className="absolute left-2 sm:left-4 lg:left-10 top-10">
              <div className="lg:w-28 lg:h-28 w-14 h-14 sm:w-20 sm:h-20 relative">
                <Image src={makatiImg} alt="Makati Logo" fill />
              </div>
            </div>
            <div className="flex flex-col mt-10 text-center font-montserrat">
              <span className="text-xs sm:text-base lg:text-xl uppercase">
                Republic of the Philippines
              </span>
              <span className="text-xs sm:text-base lg:text-2xl uppercase font-bold">
                City of Makati
              </span>
              <span className="text-xs sm:text-base lg:text-3xl uppercase font-bold">
                Barangay 28 - Comembo
              </span>
              <span className="text-xs sm:text-base lg:text-xl uppercase">
                Anahaw St., Comembo, Makati City
              </span>
              <span className="text-xs sm:text-base lg:text-xl uppercase">
                Tel. No. 7738-1883 / 7754-3045
              </span>
              <span className="text-xs lg:text-4xl font-bold mt-10">
                All Records
              </span>
            </div>
            <div className="absolute right-2 sm:right-4 lg:right-10 top-10">
              <div className="relative lg:w-28 lg:h-28 w-14 h-14 sm:w-20 sm:h-20">
                <Image src={comemboImg} alt="Comembo Logo" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow h-3/4 lg:h-2/3 items-center justify-center m-4 lg:m-10 overflow-y-scroll">
          <DashboardTable />
        </div>
      </div>
      <div className="flex mt-4 font-bebas">
        <Button className="text-4xl bg-blue-400 text-white w-[151px] h-[57px] rounded-xl">
          Print
        </Button>
      </div>
    </div>
  );
}

export default Records
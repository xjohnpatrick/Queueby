import DashboardTable from '@/components/ui/DashboardTable'
import { Button } from '@nextui-org/button'
import Image from 'next/image';
import makatiImg from "@/public/makati.png"
import comemboImg from "@/public/comembo.png"

import React from 'react'
import { dashboardRows } from '@/data/users/rows';

const Records = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-[1000px] sm:h-[1100px] lg:h-[1500px]">
      <div className="flex flex-col items-center w-[340px] sm:w-[600px] lg:w-[780px] xl:w-[1000px] 2xl:w-[1200px]">
        <h1 className="flex text-4xl font-semibold my-8 font-montserrat text-center">
          Viewing All Records
        </h1>

        <div className="flex flex-col w-full h-[700px] sm:h-[800px] lg:h-[1250px] border border-black">
          <div className="h-1/4">
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
                <span className="text-sm sm:text-base lg:text-4xl font-bold mt-4 lg:mt-10">
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
          <div className="flex-grow h-3/4 items-center justify-center m-4 lg:mx-10 overflow-y-scroll scrollbar-hide bgre">
            <DashboardTable removeWrapper dashboardRows={dashboardRows}/>
          </div>
        </div>
        <div className="flex mt-4 font-bebas">
          <Button className="text-4xl bg-blue-400 text-white w-[151px] h-[57px] rounded-xl">
            Print
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Records
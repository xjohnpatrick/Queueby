import { bebasNeue, montserrat } from '@/app/fonts/fonts'
import DashboardTable from '@/components/ui/DashboardTable'
import { Button } from '@nextui-org/button'

import React from 'react'

const Records = () => {

  return (
    <div className="flex flex-col items-center w-full h-[1200px]"> 
      <h1 className={`flex text-4xl font-semibold my-8 ${montserrat.className}`}>Viewing All Records</h1>

      <div className='flex flex-col w-[80vw] lg:w-[70vw] h-[90vh] border border-black'>
        <div className='h-1/3'>
            <div className='flex relative items-center justify-center'>
              <img 
              src="/makati.png" 
              alt="Makati Logo" 
              className='absolute left-10 top-10 lg:w-32 lg:h-32 w-20 h-20'
              />
              <div className={`flex flex-col mt-32 sm:mt-20 lg:mt-10 text-center ${montserrat.className}`}>
                <span className='md:text-xl uppercase'>
                  Republic of the Philippines
                </span>
                <span className='md:text-2xl uppercase font-bold'>
                  City of Makati
                </span>
                <span className='md:text-3xl uppercase font-bold'>
                  Barangay 28 - Comembo
                </span>
                <span className='md:text-xl uppercase'>
                  Anahaw St., Comembo, Makati City
                </span>
                <span className='md:text-xl uppercase'>
                  Tel. No. 7738-1883 / 7754-3045
                </span>
                <span className='md:text-4xl font-bold mt-10'>
                  All Records
                </span>
              </div>
              <img 
              src="/comembo.png" 
              alt="Comembo Logo" 
              className='absolute right-10 top-10 lg:w-32 lg:h-32 w-20 h-20'
              />
            </div>
        </div>
        <div className='flex-grow h-2/3 items-center justify-center m-10 overflow-y-scroll'>
          <DashboardTable />
        </div>
      </div>
      <div className={`flex my-10 ${bebasNeue.className}`}>
        <Button className='text-4xl bg-blue-400 text-white w-[151px] h-[57px] rounded-xl'>
          Print
        </Button>
      </div>
    </div>
  )
}

export default Records
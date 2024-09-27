'use client'

import { bebasNeue, montserrat } from '@/app/fonts/fonts'
import { committeeMembers } from '@/app/users/brgy-members';

import { Button } from '@nextui-org/button'

import React, { useState } from 'react'

const CertificateOfClearance = () => {
  return (
    <div className='flex flex-col h-[1350px] w-full items-center'>
      <h1 className={`flex text-4xl font-semibold my-8 ${montserrat.className}`}>Barangay Clearance</h1>

      <div className='flex w-[800px] h-[1030px] border-blue-400 border-2 p-6'>

        <div className="flex flex-col relative justify-center w-full">

            <div className={`flex flex-col text-center ${montserrat.className}`}>
              <div className="flex absolute left-0">
                <img 
                src="/makati.png" 
                alt="Makati Logo" 
                className='w-24 h-24'
                />
              </div>
              <div className="flex flex-col leading-4">
                <span className='md:text-lg uppercase'>
                  Republic of the Philippines
                </span>
                <span className='md:text-xl uppercase font-bold'>
                  City of Makati
                </span>
                <span className='md:text-2xl uppercase font-bold'>
                  Barangay 28 - Comembo
                </span>
                <span className='md:text-medium uppercase'>
                  Anahaw St., Comembo, Makati City
                </span>
                <span className='md:text-lg'>
                  Tel. No. 7738-1883 / 7754-3045
                </span>
              </div>
              <div className="flex absolute right-0">
                <img 
                src="/comembo.png" 
                alt="Brgy Comembo Logo" 
                className='w-24 h-24'
                />
              </div>
            </div>
            

          <div className={`flex w-full h-full pt-12 ${montserrat.className}`}>
            <div className="flex flex-col w-1/4">

              {committeeMembers.map(({ id, name, position, committees}) => (
                <div className='flex flex-col mb-3' key={id}>
                    {position === "Punong Barangay" ? (
                      <>
                      <span className='font-bold text-[10px] uppercase'>{name}</span>
                      <span className='italic font-bold uppercase text-[12px]'>{position}</span>
                      </>
                    ) : position === "Kagawad" ? (
                      <> 
                        <span className='uppercase font-bold text-[12px]'>{position}:</span>
                        {(name as string[]).map((kagawadName: string, index: number) => (
                          <span className='font-bold text-[10px] uppercase' key={index}>{kagawadName}</span>
                        ))}
                      </>
                    ) : (
                      <>
                      <span className='font-bold text-[10px] uppercase'>{name}</span>
                      <span className='italic font-bold text-[10px]'>{position}</span>
                      </>
                    )}

                    {committees.length > 0 && position !== "Barangay Treasurer" && position !== "Barangay Secretary" && (
                      <>
                      <span className='italic text-[10px]'>Committee in Charge</span>
                      {committees.map((committee, index) => (
                        <span className='italic text-[10px]' key={index}>{committee}</span>
                      ))}
                      </>
                  )}

                </div>
              ))}

            </div>

            <div className="flex flex-col items-center relative w-3/4">
                <span className='italic text-sm absolute right-0 top-0 font-bold'>Date(<span contentEditable>mm</span>/<span contentEditable>dd</span>/<span contentEditable>yyyy</span>)</span>
                <span className="text-2xl absolute right-0 top-5 font-bold italic uppercase">Barangay Clearance</span>
              
              <div className='flex flex-col w-full h-96 mt-6 py-12 pl-6'>

                <div className="flex flex-col">
                <span className='uppercase font-bold text-sm italic'>This is to certify that{" "}
                    {/*Editable Text*/}
                    <span
                      className='font-bold text-sm italic normal-case' contentEditable>
                      ______________________________________
                    </span>
                    <span className='font-bold text-sm italic lowercase'>
                        ,{" "}whose signature or right thumb mark appears herewith, is a bonafide of this Barangay with postal address
                        {" "}<span className='normal-case' contentEditable>_________________________________</span>.
                    </span>
                </span>

                  <span className='font-bold text-sm italic indent-6 mt-6'>Search of available records has been made and the results thereof are indicated hereunder</span>
                </div>
                
                <div className='flex flex-col mt-6'>
                  <div className="flex h-[1px] w-full bg-gray-100"></div>
                  <span className='flex font-bold italic uppercase my-5 justify-center text-sm' contentEditable>No derogatory record</span>
                  <div className="flex h-[1px] w-full bg-gray-100"></div>

                  <span className='flex justify-center italic font-bold text-sm mt-5'>This certification/clearance is issued upon request in connection with</span>
                  <span className='flex justify-center italic font-bold text-sm mt-5 uppercase'>Requirements</span>
                  <div className="flex h-[3px] w-full bg-gray-100 mt-5"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={`flex my-10 ${bebasNeue.className}`}>
        <Button className='text-4xl bg-blue-400 text-white w-[151px] h-[57px] rounded-xl'>
          Print
        </Button>
      </div>

      <div className={`flex flex-col ${montserrat.className}`}>
        <p className='italic text-xl'>Note: Clicking the print button will automatically</p>
        <p className='italic text-xl text-center'>print two copies of this document.</p>
      </div>

    </div>
  )
}

export default CertificateOfClearance
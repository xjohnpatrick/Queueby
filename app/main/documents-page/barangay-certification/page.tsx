'use client'

import { bebasNeue, montserrat } from '@/app/fonts/fonts'
import { committeeMembers } from '@/app/users/brgy-members';

import { Button } from '@nextui-org/button'

import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

const BarangayPermit = () => {

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='flex flex-col h-[1550px] w-full items-center'>
      <h1 className={`flex text-4xl font-semibold my-8 ${montserrat.className}`}>Barangay Certification</h1>

      <div ref={componentRef} className='flex w-[805px] h-[1138px] shadow shadow-blue-400 p-6'>

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
                <span className="text-2xl absolute right-0 top-5 font-bold italic uppercase">Barangay Certification</span>
              
              <div className='flex relative flex-col w-full h-full mt-6 py-12 pl-6'>

                <div className="flex flex-col">
                <span className='uppercase font-bold text-sm italic'>This is to certify that{" "}
                    {/*Editable Text*/}
                    <span
                      className='font-bold text-sm italic normal-case underline' contentEditable>
                      ______________________________________
                    </span>
                    <span className='font-bold text-sm italic lowercase'>
                        ,{" "}whose signature or right thumb mark appears herewith, is a bonafide of this Barangay with postal address
                        {" "}<span className='normal-case underline' contentEditable>_________________________________</span>.
                    </span>
                </span>

                  <span className='font-bold text-sm italic indent-6 mt-6'>Search of available records has been made and the results thereof are indicated hereunder</span>
                </div>
                
                <div className='flex flex-col mt-6'>
                  <div className="flex h-[1px] w-full bg-gray-100"></div>
                  <span className='flex font-bold italic uppercase my-5 justify-center text-sm text-center' contentEditable>No derogatory record</span>
                  <div className="flex h-[1px] w-full bg-gray-100"></div>

                  <span className='flex justify-center italic font-bold text-sm mt-5'>This certification/clearance is issued upon request in connection with</span>
                  <span className='flex justify-center italic font-bold text-sm mt-5 uppercase'>Requirements</span>
                  <div className="flex h-[3px] w-full bg-gray-100 mt-5"></div>
                </div>

                  {committeeMembers
                  .filter(member => member.position === "Punong Barangay")
                  .map(({ id, name, position }) => (
                    <div key={id} className={`flex flex-col absolute right-0 bottom-80 ${montserrat.className}`}>
                      <span className='text-medium italic font-bold'>{name}</span>
                      <span className='text-sm italic font-bold text-center'>{position}</span>
                    </div>
                  ))}


                <div className={`flex flex-col absolute bottom-28 left-16 ${montserrat.className}`}>
                  <span className='text-sm italic font-bold uppercase text-center' contentEditable>Name/Signature of Applicant</span>
                  <span className='text-sm italic font-bold'>Community Tax Cert. <span contentEditable>________________</span></span>
                  <span className='text-sm italic font-bold'>Issued at Makati City <span contentEditable>________________</span></span>
                  <span className='text-sm italic font-bold'>Issued On <span contentEditable>____________________________</span></span>
                </div>

              </div>
            </div>
            
            
          </div>
          <div className={`flex ${montserrat.className}`}>
            <span className='italic text-[12px] font-bold uppercase'>Not Valid Without Seal</span>
          </div>
        </div>
      </div>

      <div className={`flex my-10 ${bebasNeue.className}`}>
        <Button onClick={handlePrint} className='text-4xl bg-blue-400 text-white w-[151px] h-[57px] rounded-xl'>
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

export default BarangayPermit
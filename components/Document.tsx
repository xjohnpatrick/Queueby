"use client";

import React, { useRef } from "react";
import { committeeMembers } from "@/data/users/brgy-members";
import { useReactToPrint } from "react-to-print";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import makatiLogo from "@/public/makati.png";
import comemboLogo from "@/public/comembo.png";

interface DocumentTextProps {
  title?: string;
}

export default function Document({ title }: DocumentTextProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="flex flex-col items-center">
      <div
        ref={componentRef}
        className="flex w-[350px] h-[450px] sm:w-[400px] sm:h-[600px] md:w-[600px] md:h-[800px] lg:w-[793px] lg:h-[1123px] shadow shadow-blue-400 p-6 mx-auto"
      >
        <div className="flex flex-col relative justify-center w-full">
          <div className="flex flex-col text-center font-montserrat">
            <div className="flex absolute left-0">
              <Image
                src={makatiLogo}
                alt="Makati Logo"
                className="w-12 sm:w-14 md:w-20 lg:w-24"
              />
            </div>
            <div className="flex flex-col leading-4">
              <span className="text-[10px] sm:text-[12px] md:text-lg uppercase">
                Republic of the Philippines
              </span>
              <span className="text-[10px] sm:text-[12px] md:text-xl uppercase font-bold">
                City of Makati
              </span>
              <span className="text-[10px] sm:text-[12px] md:text-2xl uppercase font-bold">
                Barangay 28 - Comembo
              </span>
              <span className="text-[10px] sm:text-[12px] md:text-medium uppercase">
                Anahaw St., Comembo, Makati City
              </span>
              <span className="text-[10px] sm:text-[12px] md:text-lg">
                Tel. No. 7738-1883 / 7754-3045
              </span>
            </div>
            <div className="flex absolute right-0">
              <Image
                src={comemboLogo}
                alt="Brgy Comembo Logo"
                className="w-12 sm:w-14 md:w-20 lg:w-24"
              />
            </div>
          </div>

          <div className="flex w-full h-full pt-2 sm:pt-6 md:pt-8 lg:pt-12 font-montserrat">
            <div className="flex flex-col w-1/4">
              {committeeMembers.map(({ id, name, position, committees }) => (
                <div className="flex flex-col mb-1 md:mb-1.5 lg:mb-3" key={id}>
                  {position === "Punong Barangay" ? (
                    <>
                      <span className="font-bold text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] uppercase">
                        {name}
                      </span>
                      <span className="italic font-bold uppercase text-[4.5px] sm:text-[6.5px] lg:text-[12px]">
                        {position}
                      </span>
                    </>
                  ) : position === "Kagawad" ? (
                    <>
                      <span className="uppercase font-bold text-[4.5px] sm:text-[6.5px] lg:text-[12px]">
                        {position}:
                      </span>
                      {(name as string[]).map(
                        (kagawadName: string, index: number) => (
                          <span
                            className="font-bold text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] uppercase"
                            key={index}
                          >
                            {kagawadName}
                          </span>
                        )
                      )}
                    </>
                  ) : (
                    <>
                      <span className="font-bold text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] uppercase">
                        {name}
                      </span>
                      <span className="italic font-bold text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px]">
                        {position}
                      </span>
                    </>
                  )}

                  {committees.length > 0 &&
                    position !== "Barangay Treasurer" &&
                    position !== "Barangay Secretary" && (
                      <>
                        <span className="italic text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px]">
                          Committee in Charge
                        </span>
                        {committees.map((committee, index) => (
                          <span
                            className="italic text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px]"
                            key={index}
                          >
                            {committee}
                          </span>
                        ))}
                      </>
                    )}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center relative w-3/4">
              <span className="italic text-[5px] sm:text-[6px] md:text-[8px] lg:text-sm absolute right-0 top-0 font-bold">
                Date(<span contentEditable>mm</span>/
                <span contentEditable>dd</span>/
                <span contentEditable>yyyy</span>)
                <span className="text-red-500">*</span>
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-2xl absolute right-0 top-2 md:top-3 lg:top-5 font-bold italic uppercase">
                {title}
              </span>

              <div className="flex relative flex-col w-full h-full mt-2 sm:mt-4 md:mt-6 py-2 md:py-6 lg:py-12 pl-2 sm:pl-4 md:pl-5 lg:pl-6">
                <div className="flex flex-col">
                  <span className="uppercase font-bold text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic mt-2">
                    This is to certify that {/*Editable Text*/}
                    <span
                      className="font-bold text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic normal-case underline"
                      contentEditable
                    >
                      ______________________________________
                      <span className="text-red-500">*</span>
                    </span>
                    <span className="font-bold text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic lowercase">
                      , whose signature or right thumb mark appears herewith, is
                      a bonafide of this Barangay with postal address{" "}
                      <span className="normal-case underline" contentEditable>
                        _________________________________
                        <span className="text-red-500">*</span>
                      </span>
                      .
                    </span>
                  </span>

                  <span className="font-bold text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic indent-6 mt-6">
                    Search of available records has been made and the results
                    thereof are indicated hereunder
                  </span>
                </div>

                <div className="flex flex-col mt-2 sm:mt-4 lg:mt-6">
                  <div className="flex h-[1px] w-full bg-gray-100"></div>
                  <span
                    className="flex font-bold italic uppercase my-2 lg:my-5 justify-center text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm text-center"
                    contentEditable
                  >
                    No derogatory record<span className="text-red-500">*</span>
                  </span>
                  <div className="flex h-[1px] w-full bg-gray-100"></div>

                  <span className="flex justify-center italic font-bold text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm mt-2 lg:mt-5">
                    This certification/clearance is issued upon request in
                    connection with
                  </span>
                  <span className="flex justify-center italic font-bold text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm mt-2 lg:mt-5 uppercase">
                    Requirements
                  </span>
                  <div className="flex h-[3px] w-full bg-gray-100 mt-2 md:mt-3 lg:mt-5"></div>
                </div>

                {committeeMembers
                  .filter((member) => member.position === "Punong Barangay")
                  .map(({ id, name, position }) => (
                    <div
                      key={id}
                      className="flex flex-col absolute right-0 bottom-24 sm:bottom-36 md:bottom-52 lg:bottom-80 font-montserrat"
                    >
                      <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-medium italic font-bold">
                        {name}
                      </span>
                      <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-sm italic font-bold text-center">
                        {position}
                      </span>
                    </div>
                  ))}

                <div className="flex flex-col absolute bottom-14 lg:bottom-28 left-10 sm:left-12 md:left-14 lg:left-16 font-montserrat">
                  <span
                    className="text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic font-bold uppercase text-center"
                    contentEditable
                  >
                    Name/Signature of Applicant
                    <span className="text-red-500">*</span>
                  </span>
                  <span className="text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic font-bold">
                    Community Tax Cert.{" "}
                    <span contentEditable>________________</span>
                  </span>
                  <span className="text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic font-bold">
                    Issued at Makati City{" "}
                    <span contentEditable>________________</span>
                  </span>
                  <span className="text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm italic font-bold">
                    Issued On{" "}
                    <span contentEditable>____________________________</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-montserrat">
            <span className="italic text-[6px] sm:text-[7px] md:text-[10px] lg:text-[12px] font-bold uppercase">
              Not Valid Without Seal
            </span>
          </div>
        </div>
      </div>

      <div className="flex my-10 font-bebas">
        <Button
          onClick={handlePrint}
          className="text-4xl bg-blue-400 text-white w-[151px] h-[57px] rounded-xl"
        >
          Print
        </Button>
      </div>

      <div className="flex flex-col font-montserrat md:mb-4">
        <p className="italic text-xl text-center">
          Note: Clicking the print button will automatically
        </p>
        <p className="italic text-xl text-center">
          print two copies of this document.
        </p>
      </div>
    </div>
  );
}

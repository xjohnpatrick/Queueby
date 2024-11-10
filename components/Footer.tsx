import { logo } from "@/data/logo";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-blue-200">
      <div className="grid sm:grid-cols-[250px_auto] md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-2 h-full w-full">
          <div className="flex gap-2 mx-4 mt-4 lg:mx-12 lg:mt-10">
            {logo.map((item) => (
              <div
                key={item.id}
                className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              >
                <Image src={item.img} alt={item.alt} fill />
              </div>
            ))}
          </div>
          <div className="flex flex-col text-white font-bebas mx-4 mb-4 lg:mx-12">
            <span className="uppercase text-3xl">
              Barangay Comembo Application
            </span>
            <span className="uppercase text-2xl">
              City Government of Makati
            </span>
            <span className="uppercase text-xl">
              In collaboration with queueby
            </span>
          </div>
        </div>

        <div className="flex h-full w-full items-center">
          <div className="flex text-lg m-4 lg:mt-10 w-full">
            <div className="flex flex-col gap-1">
              {[
                {
                  label: "Contact Number:",
                  info: "277381883",
                },
                {
                  label: "Address:",
                  info: "Comembo Barangay Hall, Anahaw",
                  info1: "St., City Of Makati, NCR, Fourth",
                  info2: "District, National Capital Region",
                },
                {
                  label: "Email:",
                  info: "barangaycomembo28@gmail.com",
                  className: "text-xs"
                },
                {
                  label: "Office Hours:",
                  info: "8:00 AM to 5:00 PM, Monday to Friday",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[100px_auto] lg:grid-cols-[150px_300px] text-white gap-2"
                >
                  <span className="text-start lg:text-right text-sm lg:text-base xl:text-lg mr-4 font-bebas">
                    {item.label}
                  </span>
                  <div className="grid grid-cols-1 text-xs lg:text-base font-montserrat">
                    <span>{item.info}</span>
                    <span>{item.info1}</span>
                    <span>{item.info2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full sm:col-span-3 xl:col-span-1 text-white p-4 lg:mt-4">
          <span className="text-sm lg:text-base xl:text-lg font-montserrat text-center xl:text-justify">
            Thank you for using our scheduling system! It is our utmost pleasure
            to assist you in staying organized and keeping your appointments in
            order. Please feel free to reach out to us if you require any
            assistance or have any inquiries about the application. We assure
            you that we are always here to assist you in any way possible
          </span>
          <span className="text-sm lg:text-lg mt-4 font-montserrat text-center xl:text-start">
            Best Regards, Queueby
          </span>
        </div>
      </div>

      <div className="flex text-white text-lg sm:text-xl md:text-2xl w-full justify-center font-bebas">
        © COPYRIGHT 2023 ALL RIGHTS RESERVED QUEUEBY
      </div>
    </footer>
  );
};

export default Footer;

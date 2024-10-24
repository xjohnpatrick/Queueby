import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-blue-200">
      <div className="flex">
        <div className="hidden sm:flex flex-col gap-2 h-full py-8 pl-10 w-[650px]">
          <div className="flex gap-2">
            <img
              src="/makati.png"
              alt="Makati Logo"
              className="hidden sm:flex sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            <img
              src="/comembo.png"
              alt="Comembo Logo"
              className="hidden sm:flex sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            <img
              src="/queueby.png"
              alt="Queueby Logo"
              className="hidden sm:flex sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
          </div>
          <div className="flex flex-col text-white font-bebas">
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

        <div className="hidden md:flex py-8 pl-4 h-full w-1/2">
          <div className="flex flex-col text-right">
            <span className="uppercase text-xl text-white font-bebas">
              Contact Number:
            </span>
            <span className="uppercase text-xl text-white font-bebas">
              Address:
            </span>
            <span className="uppercase mt-[56px] text-xl text-white font-bebas">
              Email:
            </span>
            <span className="uppercase text-xl text-white font-bebas">
              Office Hours:
            </span>
          </div>
          <div className="flex flex-col text-white">
            <span className="text-lg ml-4 font-montserrat">277381883</span>
            <span className="text-lg ml-4 font-montserrat">
              Comembo Barangay Hall, Anahaw
            </span>
            <span className="text-lg ml-4 font-montserrat">
              St., City Of Makati, NCR, Fourth
            </span>
            <span className="text-lg ml-4 font-montserrat">
              District, National Capital Region
            </span>
            <span className="text-lg ml-4 mr-[200px] font-montserrat">
              barangaycomembo28@gmail.com
            </span>
            <span className="text-lg ml-4 mr-[200px] font-montserrat">
              8:00 AM to 5:00 PM, Monday to Friday
            </span>
          </div>
        </div>

        <div className="hidden xl:flex flex-col w-1/2 text-white">
          <span className="text-lg text-justify pt-8 pr-4 font-montserrat">
            Thank you for using our scheduling system! It is our utmost pleasure
            to assist you in staying organized and keeping your appointments in
            order. Please feel free to reach out to us if you require any
            assistance or have any inquiries about the application. We assure
            you that we are always here to assist you in any way possible
          </span>
          <span className="text-lg mt-6 font-montserrat">
            Best Regards, Queueby
          </span>
        </div>
      </div>

      <div className="flex text-white text-lg sm:text-2xl w-full justify-center font-bebas">
        © COPYRIGHT 2023 ALL RIGHTS RESERVED QUEUEBY
      </div>
    </footer>
  );
};

export default Footer;

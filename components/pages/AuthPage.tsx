"use client";
import React from "react";
import Image from "next/image";

import makatiBg from "@/public/makatibg.jpg";
import makatiLogo from "@/public/makati.png";
import comemboLogo from "@/public/comembo.png";

interface AuthPageProps {
  heading1?: string;
  heading2?: string;
  content?: React.ReactNode;
}

export default function AuthPage({
  heading1,
  heading2,
  content,
}: AuthPageProps) {
  return (
    <main>
      <div className="flex flex-col h-[100vh] lg:h-screen w-full relative items-center justify-center bg-gradient-to-tr from-blue-200 to-blue-200">
        <div className="flex my-4 lg:my-0 lg:absolute lg:right-5 lg:top-5 bg-white rounded-md p-1 mx-4">
          <span className="text-lg font-poppins">
            The system is front-end only. Click &quot;Sign In&quot; to check out
            its features.
          </span>
        </div>
        <Image
          className="object-cover h-full w-full absolute mix-blend-overlay opacity-50"
          src={makatiBg}
          alt="Makati Background"
        />

        <div className="flex flex-col lg:flex-row items-center z-10 shadow-lg shadow-slate-800 rounded-3xl w-[320px] sm:w-auto h-[600px]">
          <div className="flex w-full h-[400px] sm:w-[520px] md:w-[620px] lg:w-[400px] lg:h-full bg-gradient-to-br from-blue-100 to-blue rounded-t-3xl lg:rounded-none lg:rounded-l-3xl relative mx-auto">
            <Image
              className="object-cover h-full w-full absolute mix-blend-overlay opacity-40 rounded-t-3xl lg:rounded-none lg:rounded-l-3xl"
              src={makatiBg}
              alt="Makati Background"
            />

            <div className="flex flex-col gap-6 items-center justify-center w-full font-bebas p-auto">
              <div className="flex gap-4 mt-4 lg:mt-0">
                <Image
                  className="w-20 h-20 lg:w-28 lg:h-28"
                  src={makatiLogo}
                  alt="Makati Logo"
                />
                <Image
                  className="w-20 h-20 lg:w-28 lg:h-28"
                  src={comemboLogo}
                  alt="Comembo Logo"
                />
              </div>
              <div className="flex flex-col text-white text-center gap-4 mx-4">
                <div className="flex lg:flex-col gap-1 leading-8">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase">
                    Barangay Comembo
                  </h1>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase">
                    Information System
                  </h1>
                </div>
                <div className="flex lg:flex-col gap-1 leading-8 justify-center">
                  <h1 className="text-xl sm:text-2xl md:text-3xl uppercase">
                    in collaboration with
                  </h1>
                  <h1 className="text-xl sm:text-2xl md:text-3xl uppercase">
                    queueby
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full sm:w-[520px] md:w-[620px] lg:w-[600px] lg:rounded-none lg:rounded-r-3xl bg-white rounded-b-3xl relative">
            <div className="flex flex-col gap-2 mb-5 items-center font-bebas">
              <h1 className="uppercase text-4xl lg:text-6xl text-center">
                {heading1}
              </h1>
              <h1 className="uppercase text-4xl lg:text-6xl text-center">
                {heading2}
              </h1>
            </div>
            {content}
          </div>
        </div>
      </div>
    </main>
  );
}

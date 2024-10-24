import React from "react";
import Link from "next/link";

import { FaArrowLeft } from "react-icons/fa";

import { Button } from "@nextui-org/button";
import AuthPage from "@/components/AuthPage";

const VerifyEmail = () => {
  return (
    <div>
      <AuthPage
        content={
          <div className="flex relative flex-col items-center justify-center w-[320px] h-[420px] sm:w-[520px] md:w-[620px] lg:w-[600px] lg:h-full lg:rounded-none lg:rounded-r-3xl bg-white rounded-b-3xl">
            <Link href="/auth/forgot-password">
              <Button
                className="absolute -top-2 right-2 lg:left-2 lg:right-auto bg-white md:text-lg lg:text-xl text-blue-400 font-montserrat"
                size="sm"
              >
                <FaArrowLeft />
                Back
              </Button>
            </Link>
            <div className="flex flex-col gap-2 mb-3 lg:mb-5 items-center font-bebas">
              <img
                src="/verifyemail.jpg"
                alt="Verify Email Logo"
                className="w-40 lg:w-60"
              />
            </div>
            <div className="flex flex-col gap-4 relative">
              <div className="mx-10 sm:mx-14 text-justify text-gray-100 text-sm md:text-lg lg:text-xl">
                <span className="flex font-montserrat">
                  An email has been sent to user@gmail.com with instructions to
                  reset password. If you have not received an email after a few
                  minutes, check your spam folder.
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-2 lg:mt-12 items-center">
              <input
                className="mb-6 lg:mb-[71px] lg:w-[415px] h-12 rounded-lg border-2 border-gray px-4 font-montserrat"
                type="text"
                placeholder="Input verification code"
              />

              <Link href="/auth/reset-password">
                <Button
                  className="bg-blue-400 w-[280px] text-3xl text-white font-bebas"
                  radius="sm"
                >
                  Next
                </Button>
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default VerifyEmail;

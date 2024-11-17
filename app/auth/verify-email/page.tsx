import React from "react";
import Link from "next/link";

import { FaArrowLeft } from "react-icons/fa";

import { Button } from "@nextui-org/button";
import AuthPage from "@/components/pages/AuthPage";
import Image from "next/image";
import verifyEmailImg from "@/public/verifyemail.jpg"

const VerifyEmail = () => {
  return (
    <div>
      <AuthPage
        content={
          <>
            <Link href="/auth/forgot-password">
              <Button
                className="absolute top-1.5 right-2 lg:left-2 lg:right-auto bg-white md:text-lg lg:text-xl text-blue-400 font-montserrat z-50"
                size="sm"
              >
                <FaArrowLeft />
                Back
              </Button>
            </Link>
            <div className="flex gap-2 mb-3 lg:mb-5 items-center font-bebas">
              <div className="w-56 h-40 lg:w-60 relative">
                <Image src={verifyEmailImg} alt="Verify Email Logo" fill />
              </div>
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
                className="mb-6 lg:mb-4 w-full md:w-96 lg:w-[415px] h-12 rounded-lg border-2 border-gray px-4 font-montserrat"
                type="text"
                placeholder="Input verification code"
              />

              <Link href="/auth/reset-password">
                <Button
                  className="bg-blue-400 w-[280px] text-3xl text-white font-bebas my-4"
                  radius="sm"
                >
                  Next
                </Button>
              </Link>
            </div>
          </>
        }
      />
    </div>
  );
};

export default VerifyEmail;

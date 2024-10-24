import React from "react";

import AuthPage from "@/components/AuthPage";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { FaArrowLeft } from "react-icons/fa";
import { Input } from "@nextui-org/input";

const ForgotPassword = () => {
  return (
    <div>
      <AuthPage
        content={
          <>
            <Link href="/auth/sign-in">
              <Button
                className="absolute top-1.5 right-2 lg:left-2 lg:right-auto bg-white md:text-lg lg:text-xl text-blue-400 font-montserrat"
                size="sm"
              >
                <FaArrowLeft />
                Back
              </Button>
            </Link>
            <div className="flex flex-col gap-2 my-5 items-center font-bebas">
              <h1 className="uppercase text-4xl lg:text-6xl">Reset Password</h1>
            </div>
            <div className="flex flex-col gap-4 relative">
              <div className="mx-10 sm:mx-14 lg:mx-24 text-justify text-gray-100 md:text-lg lg:text-xl">
                <span className="flex font-montserrat">
                  Enter the email associated with your account and we&apos;ll
                  send an email with instructions to reset your password.
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-12 items-center">
              <Input
                className="mb-10 lg:mb-[71px] lg:w-[415px] text-blue-200 font-montserrat"
                label="Email address"
                labelPlacement="outside"
                radius="full"
                type="email"
                placeholder="Enter your email address"
              />

              <Link href="/auth/verify-email">
                <Button
                  className="bg-blue-400 w-[280px] text-3xl text-white font-bebas mb-4"
                  radius="sm"
                  size="lg"
                >
                  Send Instructions
                </Button>
              </Link>
            </div>
          </>
        }
      />
    </div>
  );
};

export default ForgotPassword;

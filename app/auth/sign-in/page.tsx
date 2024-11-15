import AuthPage from "@/components/pages/AuthPage";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function SignIn() {
  return (
    <AuthPage
      heading1="Welcome Back,"
      heading2="sign in your account"
      content={
        <>
          <div className="flex flex-col gap-4 relative w-full px-4 sm:w-[440px]">
            <div className="flex relative items-center">
              <input
                className="w-full h-[49px] py-2 pr-2 pl-10 text-lg ring-2 rounded-md ring-gray-300 outline-none font-montserrat"
                type="text"
                placeholder="Username"
              />
              <FaUser size={22} className="absolute left-2" />
            </div>
            <div className="flex relative items-center">
              <input
                className="w-full h-[49px] py-2 pr-2 pl-10 text-lg ring-2 rounded-md ring-gray-300 outline-none font-montserrat"
                type="password"
                placeholder="Password"
              />
              <IoMdLock size={28} className="absolute left-2" />
            </div>
            <Link href="/auth/forgot-password">
              <span className="underline text-blue-100 absolute bottom-[-20px] right-4 text-md font-montserrat">
                Forgot your password?
              </span>
            </Link>
          </div>
          <div className="flex mt-12">
            <Link href="/main/dashboard">
              <Button
                className="bg-blue-400 w-[170px] text-3xl text-white font-bebas"
                radius="sm"
                size="lg"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </>
      }
    />
  );
}

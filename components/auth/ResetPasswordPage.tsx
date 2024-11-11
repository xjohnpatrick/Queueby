"use client";
import Link from "next/link";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { usePasswordValidation } from "@/app/auth/reset-password/reset-password-functions";
import AuthPage from "@/components/AuthPage";

export default function ResetPasswordPage() {
    const {
      password,
      confirmPassword,
      disable,
      error,
      handlePasswordChange,
      handleConfirmPasswordChange,
    } = usePasswordValidation();
  return (
    <div>
      <AuthPage
        content={
          <>
            <div className="flex flex-col gap-2 mb-3 lg:mb-5 items-center font-bebas">
              <h1 className="uppercase text-4xl lg:text-5xl">
                Create new password
              </h1>
            </div>

            <div className="flex flex-col gap-4 relative">
              <div className="mx-10 sm:mx-16 text-justify text-gray-100 text-sm md:text-lg lg:text-xl">
                <span className="flex font-montserrat">
                  Your new password must be different from your previous
                  passwords.
                </span>
              </div>
            </div>

            <div className="flex flex-col mt-2 lg:mt-12 items-center">
              <Input
                className="md:w-[415px] text-blue-200 font-montserrat"
                radius="sm"
                type="password"
                label="New Password"
                labelPlacement="outside"
                placeholder="New Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label className="text-gray-100 text-sm md:text-lg lg:text-xl mb-6 lg:mb-[71px] font-montserrat">
                Must be at least 8 characters
              </label>

              <Input
                className="lg:w-[415px] text-blue-200 font-montserrat"
                radius="sm"
                type="password"
                label="Confirm Password"
                labelPlacement="outside"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <label className="text-gray-100 text-sm md:text-lg lg:text-xl mb-2 lg:mb-4 font-montserrat">
                Both passwords must match
              </label>

              <Link href="/auth/sign-in">
                <Button
                  isDisabled={disable}
                  className="bg-blue-400 w-[280px] text-3xl text-white font-bebas my-4"
                  radius="sm"
                >
                  Next
                </Button>
              </Link>

              {error && (
                <div className="flex absolute text-white bg-red-500 rounded-md p-4 text-sm bottom-4 right-6 font-montserrat">
                  <p>{error}</p>
                </div>
              )}
            </div>
          </>
        }
      />
    </div>
  )
}



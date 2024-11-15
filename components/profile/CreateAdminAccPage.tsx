"use client";

import { Button } from "@nextui-org/button";

import Link from "next/link";
import React from "react";

import { usePasswordValidation } from "@/app/main/(withoutSidebar)/profile-page/createAdminAcc/createAdminFunctions";
import BackButton from "@/components/buttons/BackButton";

export default function CreateAdminAccPage() {
  const {
    password,
    confirmPassword,
    disable,
    error,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePasswordValidation();

  return (
    <div className="flex flex-col justify-center lg:flex-row h-[900px] sm:h-[850px] lg:h-[700px] w-full sm:w-[630px] md:w-[758px] lg:w-[1000px] mx-4 px-4 bg-white rounded-md lg:py-16 relative">
      <BackButton />
        <div className="flex flex-col w-full lg:w-[40vw] items-center justify-center font-bebas px-2">
          <h1 className="flex text-2xl sm:text-4xl xl:text-5xl text-blue-400 text-center mb-4">
            Create Admin Account
          </h1>

          <div className="flex flex-col items-center text-blue-400 w-full gap-2">
            {[
              {
                label: "First Name:",
                type: "text",
              },
              {
                label: "Last Name:",
                type: "text",
              },
              {
                label: "Username:",
                type: "text",
              },
              {
                label: "Email:",
                type: "email",
              },
              {
                label: "Password:",
                type: "password",
                onChange: handlePasswordChange,
                value: password,
              },
              {
                label: "Confirm Password:",
                type: "password",
                onChange: handleConfirmPasswordChange,
                value: confirmPassword,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[150px_auto] justify-center lg:flex-row items-center gap-2 text-2xl mt-4"
              >
                <label className="text-nowrap">{item.label}</label>
                <input
                  className="w-[240px] sm:w-[400px] lg:w-[540px] text-lg px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat"
                  type={item.type}
                  value={
                    item.label === "Password" ||
                    item.label === "Confirm Password"
                      ? item.value
                      : undefined
                  }
                  onChange={
                    item.label === "Password" ||
                    item.label === "Confirm Password"
                      ? item.onChange
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
          <Link href="/main/profile-page/admin-verify-email">
            <Button
              isDisabled={disable}
              className="bg-blue-400 text-white text-3xl mt-8 w-36 md:w-48 lg:w-56 xl:w-72"
              size="lg"
            >
              Next
            </Button>
          </Link>
        </div>
        {error && (
          <div className="flex absolute text-white bg-red-500 rounded-md p-4 text-sm bottom-4 right-6 font-montserrat">
            <p>{error}</p>
          </div>
        )}
    </div>
  );
}

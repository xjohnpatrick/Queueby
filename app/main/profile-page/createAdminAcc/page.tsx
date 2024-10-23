"use client";

import { Button } from "@nextui-org/button";

import Link from "next/link";
import React from "react";

import { usePasswordValidation } from "@/app/main/profile-page/createAdminAcc/createAdminFunctions";
import BackButton from "@/components/buttons/BackButton";

const CreateAdmin = () => {
  const {
    password,
    confirmPassword,
    disable,
    error,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePasswordValidation();

  return (
    <div className="flex items-center justify-center h-screen w-full bg-blue-100">
      <div className="flex relative justify-center bg-white w-[75vw] lg:w-[60vw] h-[90vh] lg:h-[80vh] rounded-md">
        <BackButton />
        <div className="flex flex-col w-full lg:w-[50vw] items-center lg:gap-12 font-bebas">
          <h1 className="flex text-4xl xl:text-5xl text-blue-400 mt-12 mb-4 text-center">
            Create Admin Account
          </h1>

          <div className="flex flex-col text-blue-400 text-3xl w-full gap-4 lg:gap-6 items-center">
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[84px] xl:gap-[108px]">
              <label className="text-nowrap">First Name:</label>
              <input
                className="w-[240px] md:w-[320px] xl:w-[420px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray rounded-lg shadow-md outline-none font-montserrat"
                type="text"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[90px] xl:gap-[114px]">
              <label className="text-nowrap">Last Name:</label>
              <input
                className="w-[240px] md:w-[320px] xl:w-[420px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray rounded-lg shadow-md outline-none font-montserrat"
                type="text"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[93px] xl:gap-[115px]">
              <label>Username:</label>
              <input
                className="w-[240px] md:w-[320px] xl:w-[420px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray rounded-lg shadow-md outline-none font-montserrat"
                type="text"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[136px] xl:gap-[158px]">
              <label className="text-nowrap">Email:</label>
              <input
                className="w-[240px] md:w-[320px] xl:w-[420px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray rounded-lg shadow-md outline-none font-montserrat"
                type="email"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[93px] xl:gap-[118px]">
              <label className="text-nowrap">Password:</label>
              <input
                onChange={handlePasswordChange}
                value={password}
                className="w-[240px] md:w-[320px] xl:w-[420px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray rounded-lg shadow-md outline-none font-montserrat"
                type="password"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 xl:gap-8">
              <label className="text-nowrap">Confirm Password:</label>
              <input
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                className="w-[240px] md:w-[320px] xl:w-[420px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray rounded-lg shadow-md outline-none font-montserrat"
                type="password"
              />
            </div>

            {error && (
              <div className="flex absolute text-white bg-red-500 rounded-md p-4 text-sm bottom-4 right-6 font-montserrat">
                <p>{error}</p>
              </div>
            )}
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
      </div>
    </div>
  );
};

export default CreateAdmin;

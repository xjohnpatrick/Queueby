import BackButton from "@/components/buttons/BackButton";
import { Button } from "@nextui-org/button";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-blue-100">
      <div className="flex relative justify-center bg-white w-[75vw] lg:w-[60vw] h-[80vh] xl:h-[70vh] rounded-md">
        <BackButton />

        <div
          className="flex flex-col w-full lg:w-[45vw] items-center gap-12 lg:gap-24 font-bebas"
        >
          <h1 className="flex text-4xl xl:text-5xl text-blue-400 mt-16 text-center">
            Change Password
          </h1>

          <div className="flex flex-col text-blue-400 text-3xl w-full gap-12">
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-16">
              <label className="text-nowrap">Current Password:</label>
              <input
                className="w-[300px] md:w-[400px] lg:w-[540px] placeholder:text-xl text-xl py-2 px-3 border border-black rounded-lg font-montserrat"
                type="password"
              />
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-[106px]">
              <label className="text-nowrap">New Password:</label>
              <input
                className="w-[300px] md:w-[400px] lg:w-[540px] placeholder:text-xl text-xl py-2 px-3 border border-black rounded-lg font-montserrat"
                type="password"
              />
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-5">
              <label className="text-nowrap">Confirm New Password:</label>
              <input
                className="w-[300px] md:w-[400px] lg:w-[540px] placeholder:text-xl text-xl py-2 px-3 border border-black rounded-lg font-montserrat"
                type="password"
              />
            </div>
          </div>

          <Button
            className="bg-blue-400 text-white text-3xl w-[250px] md:w-[300px] lg:w-[320px]"
            size="lg"
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

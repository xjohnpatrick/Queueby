import BackButton from "@/components/buttons/BackButton";
import Wrapper from "@/components/Wrapper";
import { Button } from "@nextui-org/button";
import React from "react";

const ChangePassword = () => {
  return (
    <Wrapper>
      <div className="flex relative justify-center bg-white w-full lg:w-[1000px] h-[700px] xl:h-[650px] rounded-md mx-4">
        <BackButton />

        <div className="flex flex-col w-full lg:w-[45vw] items-center font-bebas gap-4">
          <h1 className="flex text-4xl xl:text-5xl text-blue-400 mt-16 mb-10 text-center">
            Change Password
          </h1>

          <div className="flex flex-col items-center text-blue-400 w-full gap-4">
            {[
              {
                label: "Current Password:",
              },
              {
                label: "New Password:",
              },
              {
                label: "Confirm New Password:",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[200px_auto] justify-center lg:flex-row items-center gap-2 text-2xl mt-4"
              >
                <label className="text-nowrap">{item.label}</label>
                <input
                  className="w-[240px] sm:w-[400px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat"
                  type="password"
                />
              </div>
            ))}
          </div>

          <Button
            className="bg-blue-400 text-white text-3xl w-[250px] md:w-[300px] lg:w-[320px] mt-14"
            size="lg"
          >
            Change Password
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ChangePassword;

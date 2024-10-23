"use client";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import BackButton from "@/components/buttons/BackButton";
import { Button } from "@nextui-org/button";

export default function EditProfileInfo() {
  const [isDisable, setIsDisable] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleDisable = () => {
    setIsDisable(false);
    setVisible(true);
  };

  const handleClose = () => {
    setIsDisable(true);
    setVisible(false);
  };
  return (
    <div className="flex relative justify-center bg-white w-[75vw] lg:w-[60vw] h-[80vh] rounded-md">
      <BackButton />
      {visible && (
        <Button
          onClick={handleClose}
          className="absolute top-2 right-2 lg:top-5 lg:right-5 text-blue-400 bg-white font-montserrat"
          size="sm"
          isIconOnly
        >
          <RiCloseFill size={24} />
        </Button>
      )}
      <div className="flex flex-col w-full lg:w-[40vw] items-center gap-12 lg:gap-24 font-bebas">
        <h1 className="flex text-4xl xl:text-5xl text-blue-400 mt-16 text-center">
          Edit personal information
        </h1>

        <div className="flex flex-col text-blue-400 text-3xl w-full gap-4 lg:gap-8 xl:gap-12">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <label className="text-nowrap">First Name:</label>
            <input
              className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat`}
              placeholder="Webster"
              disabled={isDisable}
              type="text"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
            <label className="text-nowrap">Last Name:</label>
            <input
              className="w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat"
              placeholder="Retardo"
              disabled={isDisable}
              type="text"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
            <label className="text-nowrap">Email:</label>
            <input
              className="w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat"
              placeholder="websterdalupangretardothethird@gmail.com"
              disabled={isDisable}
              type="text"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <label>Username:</label>
            <input
              className="w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat"
              placeholder="Webweb"
              disabled={isDisable}
              type="text"
            />
          </div>
        </div>
        <Button
          onClick={toggleDisable}
          className="bg-blue-400 text-white text-3xl lg:w-[320px]"
          size="lg"
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

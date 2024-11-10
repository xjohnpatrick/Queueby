"use client";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import BackButton from "@/components/buttons/BackButton";
import { Button } from "@nextui-org/button";

export default function EditProfilePage() {
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
    <div className="flex flex-col justify-center lg:flex-row h-[700px] w-full sm:w-[630px] md:w-[758px] lg:w-[900px] mx-4 px-4 bg-white rounded-md lg:py-16 relative">
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
      <div className="flex flex-col w-full lg:w-[40vw] items-center justify-center font-bebas px-2">
        <h1 className="flex text-2xl sm:text-4xl xl:text-5xl text-blue-400 text-center mb-4">
          Edit personal information
        </h1>

        <div className="flex flex-col items-center text-blue-400 w-full gap-4">
          {[
            {
              label: "First Name:",
              type: "text",
              placeholder: "Webster",
            },
            {
              label: "Last Name:",
              type: "text",
              placeholder: "Dalupang",
            },
            {
              label: "Email:",
              type: "email",
              placeholder: "websterdalupang@gmail.com",
            },
            {
              label: "Username:",
              type: "text",
              placeholder: "Bewbew",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[100px_auto] justify-center lg:flex-row items-center gap-2 text-2xl mt-4"
            >
              <label className="text-nowrap">{item.label}</label>
              <input
                className="w-[240px] sm:w-[400px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat"
                placeholder={item.placeholder}
                disabled={isDisable}
                type={item.type}
              />
            </div>
          ))}
        </div>
        <Button
          onClick={toggleDisable}
          className="bg-blue-400 text-white text-2xl md:text-3xl lg:text-4xl w-[180px] lg:w-[320px] mt-10"
          size="lg"
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

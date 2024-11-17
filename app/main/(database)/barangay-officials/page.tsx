import Image from "next/image";
import React from "react";
import { committeeMembers } from "@/data/users/brgy-members";

export default function BarangayOfficials() {
  return (
    <div className="flex bg-white h-[950px] lg:h-[1050px] xl:h-[1000px] mx-4 w-full">
      <div className="flex flex-col font-bebas w-full h-auto items-center gap-4 lg:gap-10">
        {committeeMembers
          .filter((member) => member.position === "Punong Barangay")
          .map((punongBarangay) => (
            <div
              key={punongBarangay.id}
              className="flex flex-col mt-4 lg:mt-12 gap-2 items-center"
            >
              <label className="text-blue-400 text-2xl lg:text-4xl">
                Punong Barangay
              </label>
              <div className="flex w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-slate-200 relative justify-center rounded-lg">
                <Image
                  src={punongBarangay.img[0]}
                  alt="Default Img"
                  fill
                  className="rounded-lg"
                />
                <label className="flex text-sm sm:text-base md:text-lg lg:text-xl z-50 text-white absolute bottom-0 lg:bottom-0.5">
                  {punongBarangay.name}
                </label>
              </div>
            </div>
          ))}

        <div className="flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col mt-4 gap-2 items-center">
            <label className="text-blue-400 text-2xl lg:text-3xl">
              Kagawad Members
            </label>
            <div className="grid grid-cols-2 gap-2">
              {committeeMembers
                .filter((member) => member.position === "Kagawad")
                .flatMap((kagawad) =>
                  kagawad.name.map((individualName, index) => (
                    <div
                      key={`${kagawad.id}-${index}`}
                      className="flex flex-col w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-200 relative justify-center items-center rounded-lg"
                    >
                      <Image
                        src={kagawad.img[index]}
                        alt="Default Img"
                        fill
                        className="rounded-lg"
                      />
                      <label className="flex text-xs sm:text-sm md:text-base z-50 text-white absolute -bottom-[0.5px] text-nowrap">
                        {individualName}
                      </label>
                    </div>
                  ))
                )}
            </div>
          </div>

          <div className="flex flex-col mt-4 gap-2 items-center">
            <label className="text-blue-400 text-2xl lg:text-3xl">
              Committee Members
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {committeeMembers
                .filter((member) => member.role === "Committee")
                .map((committees) => (
                  <div
                    key={committees.id}
                    className="flex w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-200 relative justify-center rounded-lg"
                  >
                    <Image
                      src={committees.img[0]}
                      alt="Default Img"
                      fill
                      className="rounded-lg"
                    />
                    <label className="flex text-xs sm:text-sm md:text-base z-50 text-white absolute -bottom-[0.5px]">
                      {committees.name}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

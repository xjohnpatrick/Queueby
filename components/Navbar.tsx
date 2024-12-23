"use client";

import Link from "next/link";

import React, { useState } from "react";

import { MdSpaceDashboard } from "react-icons/md";
import { ImFileText } from "react-icons/im";
import { LuFiles } from "react-icons/lu";
import { RiDatabaseLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import defaultFemaleImg from "@/public/female.png";
import comemboImg from "@/public/comembo.png";
import makatiImg from "@/public/makati.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [documentIsOpen, setDocumentIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [documentOpen, setDocumentOpen] = useState(false);

  const useIsActive = (
    linkPath: string | string[],
    activeBg: string = "bg-blue-100"
  ): string => {
    const pathname = usePathname();

    if (Array.isArray(linkPath)) {
      return linkPath.some(
        (path) => pathname === path || pathname.startsWith(path)
      )
        ? activeBg
        : "";
    }
    return pathname === linkPath || pathname.startsWith(linkPath)
      ? activeBg
      : "";
  };

  const useDocumentActive = (
    linkPath: string | string[],
    activeDocument: string = "bg-white text-blue-400"
  ): string => {
    const pathname = usePathname();

    if (Array.isArray(linkPath)) {
      return linkPath.some(
        (path) => pathname === path || pathname.startsWith(path)
      )
        ? activeDocument
        : "";
    }
    return pathname === linkPath || pathname.startsWith(linkPath)
      ? activeDocument
      : "";
  };

  const ActiveDocumentClasses = (linkPath: string | string[]) =>
    useDocumentActive(linkPath);
  const ActiveClasses = (linkPath: string | string[]) => useIsActive(linkPath);

  return (
    <nav className="flex flex-col no-print">
      <div className="flex h-32 bg-blue-200">
        <div className="flex text-white w-full items-center font-bebas">
          <div className="flex md:flex-col lg:flex-row items-center absolute left-4 gap-4 md:gap-0 lg:gap-4">
            <div className="flex gap-2">
              <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 relative">
                <Image src={makatiImg} alt="Makati Logo" fill />
              </div>
              <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 relative">
                <Image src={comemboImg} alt="Comembo Logo" fill />
              </div>
            </div>
            <div className="flex mt-2 lg:mt-3">
              <h1 className="flex flex-col leading-4 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
                Barangay Comembo
                <span className="text-lg xl:text-xl 2xl:text-2xl">
                  Powered by queueby
                </span>
              </h1>
            </div>
          </div>
          {/* HAMBURGER BTN */}
          <div className="md:hidden absolute right-4">
            <Button
              isIconOnly
              onClick={() => setProfileIsOpen(!profileIsOpen)}
              className="bg-blue-200 text-white"
            >
              <HiOutlineMenuAlt3 size={36} />
            </Button>
          </div>
          {profileIsOpen && (
            <div className="md:hidden text-2xl absolute left-0 top-32 w-full z-50 bg-blue-200">
              <div className="flex flex-col gap-4 p-4">
                {[
                  {
                    label: "Dashboard",
                    href: "/main/dashboard",
                  },
                  {
                    label: "Document",
                    onClick: () => {
                      setDocumentOpen(!documentOpen);
                    },
                  },
                  {
                    label: "Records",
                    href: "/main/records-page",
                  },
                  {
                    label: "Database",
                    href: "/main/user-information",
                  },
                  {
                    label: "Profile",
                    href: "/main/profile-page/profile",
                  },
                  {
                    label: "Logout",
                    href: "/auth/sign-in",
                  },
                ].map((item, index) =>
                  item.href ? (
                    <Link href={item.href} key={index}>
                      <Button
                        className={`flex text-xl text-white bg-blue-400 w-full ${ActiveClasses(
                          item.href
                        )}`}
                        onClick={() => setProfileIsOpen(false)}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      key={index}
                      className={`flex text-xl text-white bg-blue-400 w-full ${ActiveClasses(
                        "/main/documents-page"
                      )}`}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </Button>
                  )
                )}
                {documentOpen && (
                  <div className="md:hidden grid grid-cols-2 gap-4 bg-blue-100 p-4 rounded-md relative">
                    {[
                      {
                        label: "Barangay Permit",
                        className: "col-span-1",
                        href: "/main/documents-page/barangay-permit",
                      },
                      {
                        label: "Business Permit",
                        href: "/main/documents-page/business-permit",
                      },
                      {
                        label: "Barangay Certificate For First Time Job Seeker",
                        className: "col-span-2 text-base",
                        href: "/main/documents-page/firstTimeJobSeeker",
                      },
                      {
                        label: "Barangay Certification",
                        className: "text-sm",
                        href: "/main/documents-page/barangay-certification",
                      },
                      {
                        label: "Certificate of Clearance",
                        className: "text-sm",
                        href: "/main/documents-page/certificateOfClearance",
                      },
                    ].map((item, index) => (
                      <Button
                        className={`flex text-xl text-white bg-blue-400 ${
                          item.className
                        } ${ActiveDocumentClasses(item.href)}`}
                        onClick={() => setProfileIsOpen(false)}
                        key={index}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {/* END OF HAMBURGER BTN */}

          <div className="hidden md:flex text-xl xl:text-3xl 2xl:text-4xl 2xl:gap-7 items-center absolute right-10">
            <Link href="/main/dashboard">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${useIsActive(
                  "/main/dashboard"
                )}`}
              >
                <MdSpaceDashboard />
                Dashboard
              </button>
            </Link>

            <button
              onClick={() => setDocumentIsOpen(!documentIsOpen)}
              className={`flex relative gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${
                documentIsOpen ? "bg-blue-400" : ""
              } ${useIsActive("/main/documents-page")}`}
            >
              <ImFileText />
              Document
              <div className="bg-transparent absolute -bottom-10 left-0 w-full h-10" />
            </button>

            <Link href="/main/records-page">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${useIsActive(
                  "/main/records-page"
                )}`}
              >
                <LuFiles />
                Records
              </button>
            </Link>

            <Link href="/main/user-information">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out 
                  ${useIsActive([
                    "/main/user-information",
                    "/main/user-transaction",
                    "/main/announcement",
                    "/main/barangay-officials",
                  ])}
                `}
              >
                <RiDatabaseLine />
                Database
              </button>
            </Link>

            <Link href="/main/profile-page/profile">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out items-center ${useIsActive(
                  "/main/profile-page/profile"
                )}`}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                  <Image
                    src={defaultFemaleImg}
                    alt="Female Default Profile"
                    fill
                    className="rounded-md"
                  />
                </div>
                Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
      {documentIsOpen && (
        <div
          className="hidden md:flex h-32 w-full justify-center items-center bg-blue-100 font-bebas"
          onMouseEnter={() => setDocumentIsOpen(true)}
          onMouseLeave={() => setDocumentIsOpen(false)}
        >
          <div className="flex gap-2 lg:gap-10">
            {[
              {
                label: "Barangay Permit",
                href: "/main/documents-page/barangay-permit",
                className: "text-sm xl:text-xl 2xl:text-2xl",
              },
              {
                label: "Business Permit",
                href: "/main/documents-page/business-permit",
                className: "text-sm xl:text-xl 2xl:text-2xl",
              },
              {
                label: "Barangay Certificate",
                label2: "For First Time Job Seeker",
                href: "/main/documents-page/firstTimeJobSeeker",
                className: "md:px-4 text-sm xl:text-xl 2xl:text-2xl",
              },
              {
                label: "Barangay Certification",
                href: "/main/documents-page/barangay-certification",
                className: "text-sm xl:text-xl 2xl:text-2xl",
              },
              {
                label: "Certificate of Clearance",
                href: "/main/documents-page/certificateOfClearance",
                className: "text-sm xl:text-xl 2xl:text-2xl",
              },
            ].map((item, index) => (
              <Link href={item.href} key={index}>
                <Button
                  className={`hidden md:flex bg-blue-400 text-white md:w-36 lg:w-[150px] md:px-12 md:h-16 xl:h-24 xl:w-[200px] 2xl:w-[240px] justify-center items-center rounded-xl ${
                    item.className
                  } ${ActiveDocumentClasses(item.href)}`}
                >
                  <div className="flex flex-col text-center">
                    <span>{item.label}</span>
                    <span>{item.label2}</span>
                  </div>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

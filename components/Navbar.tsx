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
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [documentIsOpen, setDocumentIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [documentOpen, setDocumentOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (linkPath: string) =>
    pathname === linkPath || pathname.startsWith(linkPath) ? "bg-blue-100" : "";

  return (
    <nav className="flex flex-col no-print">
      <div className="flex h-32 bg-blue-200">
        <div className="flex text-white w-full items-center font-bebas">
          <div className="flex md:flex-col lg:flex-row items-center absolute left-4 gap-4 md:gap-0 lg:gap-4">
            <div className="flex gap-2">
              <img
                src="/makati.png"
                alt="Makati Logo"
                className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
              />
              <img
                src="/comembo.png"
                alt="Comembo Logo"
                className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
              />
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
            <div className="md:hidden text-2xl absolute left-0 top-32 w-full z-10 bg-blue-200">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/main/dashboard">
                  <Button
                    className="flex text-xl text-white bg-blue-400 w-full"
                    onClick={() => setProfileIsOpen(false)}
                  >
                    Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    setDocumentOpen(!documentOpen);
                  }}
                  className="flex text-xl text-white bg-blue-400"
                >
                  Document
                </Button>
                {documentOpen && (
                  <div className="md:hidden grid grid-cols-2 gap-4 bg-blue-100 p-4 rounded-md relative">
                    <Button
                      className="flex text-xl text-white bg-blue-400 col-span-1"
                      onClick={() => setProfileIsOpen(false)}
                    >
                      <Link href="/main/documents-page/barangay-permit">
                        Barangay Permit
                      </Link>
                    </Button>

                    <Button
                      className="flex text-xl text-white bg-blue-400"
                      onClick={() => setProfileIsOpen(false)}
                    >
                      <Link href="/main/documents-page/business-permit">
                        Business Permit
                      </Link>
                    </Button>

                    <Button
                      className="flex text-lg sm:text-xl text-white bg-blue-400 col-span-2"
                      onClick={() => setProfileIsOpen(false)}
                    >
                      <Link href="/main/documents-page/firstTimeJobSeeker">
                        Barangay Certificate For First Time Job Seeker
                      </Link>
                    </Button>

                    <Button
                      className="flex text-sm sm:text-xl text-white bg-blue-400"
                      onClick={() => setProfileIsOpen(false)}
                    >
                      <Link href="/main/documents-page/barangay-certification">
                        Barangay Certification
                      </Link>
                    </Button>

                    <Button
                      className="flex text-sm sm:text-xl text-white bg-blue-400"
                      onClick={() => setProfileIsOpen(false)}
                    >
                      <Link href="/main/documents-page/certificateOfClearance">
                        Certificate of Clearance
                      </Link>
                    </Button>
                  </div>
                )}
                <Link href="/main/records-page">
                  <Button
                    className="flex text-xl text-white bg-blue-400 w-full"
                    onClick={() => setProfileIsOpen(false)}
                  >
                    Records
                  </Button>
                </Link>
                <Link href="/main/database-page">
                  <Button
                    className="flex text-xl text-white bg-blue-400 w-full"
                    onClick={() => setProfileIsOpen(false)}
                  >
                    Database
                  </Button>
                </Link>
                <Link href="/main/profile-page/profile">
                  <Button
                    className="flex text-xl text-white bg-blue-400 w-full"
                    onClick={() => setProfileIsOpen(false)}
                  >
                    Profile
                  </Button>
                </Link>
                <Link href="/auth/sign-in">
                  <Button
                    className="flex text-xl text-white bg-blue-400 w-full"
                    onClick={() => setProfileIsOpen(false)}
                  >
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
          )}

          <div className="hidden md:flex text-xl xl:text-3xl 2xl:text-4xl 2xl:gap-7 items-center absolute right-10">
            <Link href="/main/dashboard">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${isActive(
                  "/main/dashboard"
                )}`}
              >
                <MdSpaceDashboard />
                Dashboard
              </button>
            </Link>

            <button
              onClick={() => setDocumentIsOpen(!documentIsOpen)}
              className={`flex relative gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${isActive(
                "/main/documents-page"
              )}`}
            >
              <ImFileText />
              Document
              <div className="bg-transparent absolute -bottom-10 left-0 w-full h-10" />
            </button>

            <Link href="/main/records-page">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${isActive(
                  "/main/records-page"
                )}`}
              >
                <LuFiles />
                Records
              </button>
            </Link>

            <Link href="/main/database-page">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${isActive(
                  "/main/database-page"
                )}`}
              >
                <RiDatabaseLine />
                Database
              </button>
            </Link>

            <Link href="/main/profile-page/profile">
              <button
                className={`flex gap-2 md:px-2 md:py-4 xl:py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out items-center ${isActive(
                  "/main/profile-page/profile"
                )}`}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                  <Image
                    src={defaultFemaleImg}
                    alt="Female Default Profile"
                    fill
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
          className="flex h-32 w-full justify-center items-center bg-blue-100 font-bebas"
          onMouseEnter={() => setDocumentIsOpen(true)}
          onMouseLeave={() => setDocumentIsOpen(false)}
        >
          <div className="flex gap-10">
            <Link href="/main/documents-page/barangay-permit">
              <button className="flex bg-blue-400 text-white lg:w-[150px] md:px-12 md:h-16 xl:h-24 xl:w-[200px] 2xl:w-[240px] justify-center items-center rounded-xl text-2xl">
                Barangay Permit
              </button>
            </Link>

            <Link href="/main/documents-page/business-permit">
              <button className="flex bg-blue-400 text-white lg:w-[150px] md:px-12 md:h-16 xl:h-24 xl:w-[200px] 2xl:w-[240px] justify-center items-center rounded-xl text-2xl">
                Business Permit
              </button>
            </Link>

            <Link href="/main/documents-page/firstTimeJobSeeker">
              <button className="flex bg-blue-400 text-white lg:w-[150px] md:px-4 md:h-16 xl:h-24 xl:w-[200px] 2xl:w-[240px] justify-center items-center rounded-xl xl:text-xl 2xl:text-2xl">
                Barangay Certificate For First Time Job Seeker
              </button>
            </Link>

            <Link href="/main/documents-page/barangay-certification">
              <button className="flex bg-blue-400 text-white lg:w-[150px] md:px-12 md:h-16 xl:h-24 xl:w-[200px] 2xl:w-[240px] justify-center items-center rounded-xl text-2xl">
                Barangay Certification
              </button>
            </Link>

            <Link href="/main/documents-page/certificateOfClearance">
              <button className="flex bg-blue-400 text-white lg:w-[150px] md:px-4 md:h-16 xl:h-24 xl:w-[200px] 2xl:w-[240px] justify-center items-center rounded-xl xl:text-xl 2xl:text-2xl">
                Certificate of Clearance
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

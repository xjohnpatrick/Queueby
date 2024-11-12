import React from 'react'
import { Skeleton } from "@nextui-org/skeleton";
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import defaultFemaleImg from '@/public/female.png';

export default function SkeletonLoading() {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center lg:flex-row h-[700px] lg:h-[600px] w-full sm:w-[630px] md:w-[758px] lg:w-[1200px] mx-4 bg-white rounded-md lg:py-16">
        <div className="flex flex-col justify-center lg:justify-normal lg:w-1/2 lg:border-r-medium lg:border-b-0 border-b-medium border-blue-400 h-3/4 lg:h-full mx-4">
          <div className="flex flex-col items-center mb-4">
            <h1 className="uppercase text-blue-400 text-4xl mt-4 font-bebas text-center">
              Personal Information
            </h1>
            <Skeleton className="mt-6 mb-4 w-32 h-32 relative">
              <Image src={defaultFemaleImg} alt="Female Default Profile" fill />
            </Skeleton>
            <Link href="#" className='cursor-not-allowed'>
              <span className="underline text-blue-200 text-sm font-montserrat">
                Change Profile Picture
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center text-lg lg:text-3xl gap-4 font-bebas h-full">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <h1 className="text-blue-400">Username:</h1>
              <Skeleton className="text-blue-400 text-lg lg:text-2xl break-all">
                Webster Dalupang Retardo The Third
              </Skeleton>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              <h1 className="text-blue-400">Email:</h1>
              <Skeleton className="text-blue-400 text-lg lg:text-2xl break-all">
                websterthethirdfourthfifth@gmail.com
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex sm:flex-col md:grid grid-cols-2 md:place-items-center lg:flex lg:flex-col gap-2 lg:gap-4 font-bebas items-center justify-center lg:w-1/2 h-1/4 lg:h-full m-4 lg:my-0">
          {[
            {
              href: "/main/profile-page/edit-profile",
              text: "Edit your profile",
            },
            {
              href: "/main/profile-page/createAdminAcc",
              text: "Create Admin Account",
            },
            {
              href: "/main/profile-page/change-password",
              text: "Change your password",
            },
            {
              href: "/auth/sign-in",
              text: "Logout",
              className: "hidden md:flex",
            },
          ].map((item, index) => (
            <Link href={item.href} key={index}>
              <Button
                size="lg"
                radius="md"
                className={`uppercase bg-blue-400 text-3xl text-white w-[280px] lg:w-[300px] xl:w-[380px] ${item.className}`}
                isDisabled
              >
                {item.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

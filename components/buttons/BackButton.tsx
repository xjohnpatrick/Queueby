"use client";
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { montserrat } from "@/app/fonts/fonts";

export default function BackButton() {
  return (
    <div>
      <Link href="/main/profile-page/profile">
        <Button
          className={`absolute top-2 left-2 lg:top-5 lg:left-5 bg-white md:text-lg lg:text-xl text-blue-400 ${montserrat.className}`}
          size="sm"
        >
          <FaArrowLeft />
          Back
        </Button>
      </Link>
    </div>
  );
}

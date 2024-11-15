"use client";
import { useButtonContext } from '@/context/ButtonContext';
import React, { useEffect, useState } from 'react'

export default function UserTransactionPage() {
  const { setButtons } = useButtonContext();
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    setButtons([
      {
        text: "User Information",
        onClick: () => {
          console.log("User Information");
          setActiveButton("User Information");
        },
        href: "/main/user-information",
        isActive: activeButton === "User Information",
      },
      {
        text: "User Transaction",
        onClick: () => {
          console.log("User Transaction");
          setActiveButton("User Transaction");
        },
        href: "",
        isActive: activeButton === "User Transaction",
      },
      {
        text: "Announcement",
        onClick: () => {
          console.log("Announcement");
          setActiveButton("Announcement");
        },
        href: "",
        isActive: activeButton === "Announcement",
      },
      {
        text: "Barangay Officials",
        onClick: () => {
          console.log("Barangay Officials");
          setActiveButton("Barangay Officials");
        },
        href: "",
        isActive: activeButton === "Barangay Officials",
      },
    ]);
  }, [setButtons]);
  return (
    <div className='flex w-full h-[1000px]'>User Transaction Page</div>
  )
}

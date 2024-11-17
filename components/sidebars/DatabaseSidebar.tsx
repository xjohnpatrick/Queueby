"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function DatabaseSidebar() {
  const pathname = usePathname();

  const items = [
    {
      href: "/main/user-information",
      label: "User Information",
    },
    {
      href: "/main/user-transaction",
      label: "User Transaction",
    },
    {
      href: "/main/announcement",
      label: "Announcement",
    },
    {
      href: "/main/barangay-officials",
      label: "Barangay Officials",
    },
  ];
  return (
    <aside className="flex h-auto w-full mt-4 pl-4 lg:mt-0 lg:pl-0 bg-white lg:w-64 lg:bg-blue-400">
      <div className="hidden lg:flex flex-col w-full relative font-bebas">
        {[
          {
            label: "User Information",
            href: "/main/user-information",
          },
          {
            label: "User Transaction",
            href: "/main/user-transaction",
          },
          {
            label: "Announcement",
            href: "/main/announcement",
          },
          {
            label: "Barangay Officials",
            href: "/main/barangay-officials",
          },
        ].map((button, index) => {
          const btnIsActive =
            pathname === button.href || pathname.startsWith(button.href);
          return (
            <Link
              key={index}
              href={button.href}
              className={`${
                btnIsActive
                  ? "bg-white text-blue-400"
                  : "bg-blue-400 text-white"
              } border-b-3 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[35px] h-[88px] sticky text-center flex items-center justify-center text-nowrap`}
              style={{ top: `${index * 88}px` }}
            >
              {button.label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center lg:hidden">
        <Dropdown className="bg-blue-400">
          <DropdownTrigger>
            <Button
              isIconOnly
              className="bg-blue-400 text-white"
              title="Database Sidebar Button"
            >
              <RxHamburgerMenu size={18} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Database Sidebar Navigation"
            onAction={(key) => {
              const selected = items.find((item) => item.label === key);
              if (selected) {
                window.location.href = selected.href;
              }
            }}
            className="font-bebas text-white"
          >
            {items.map((button) => {
              const isActive =
                pathname === button.href || pathname.startsWith(button.href);
              return (
                <DropdownItem
                  key={button.label}
                  className={isActive ? "text-blue-400 font-bold bg-white" : ""}
                >
                  {button.label}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    </aside>
  );
}

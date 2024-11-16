import Link from "next/link";
import React from "react";

export default function DatabaseSidebar() {
  return (
    <aside className="hidden lg:flex h-auto w-64 bg-blue-400">
      <div className="flex flex-col w-full relative font-bebas">
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
        ].map((button, index) => (
          <Link
            key={index}
            href={button.href}
            className={`bg-blue-400 text-white border-b-3 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[35px] h-[88px] sticky text-center flex items-center justify-center text-nowrap`}
            style={{ top: `${index * 88}px` }}
          >
            {button.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}

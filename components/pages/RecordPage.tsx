"use client";
import DashboardTable from "@/components/ui/tables/DashboardTable";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import makatiImg from "@/public/makati.png";
import comemboImg from "@/public/comembo.png";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { dashboardRows } from "@/data/users/rows";
import Loading from "@/components/ui/loading-ui/SpinnerLoading";
import { useButtonContext } from "@/context/ButtonContext";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function RecordPage() {
  const { setButtons } = useButtonContext();
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  const items = useMemo(
    () => [
      { key: "ALL", label: "ALL RECORDS" },
      { key: "PENDING", label: "PENDING RECORDS" },
      { key: "COMPLETED", label: "COMPLETED RECORDS" },
      { key: "TO RECEIVE", label: "TO RECEIVE RECORDS" },
      { key: "DECLINED", label: "DECLINED RECORDS" },
    ],
    []
  );

  useEffect(() => {
    setButtons(
      items.map((item) => ({
        text: item.label,
        onClick: () => setStatusFilter(item.key),
        isActive: statusFilter === item.key,
      }))
    );
  }, [items, setButtons, statusFilter]);

  const filteredItems = useMemo(() => {
    return dashboardRows.filter((user) => {
      const matchesStatus =
        statusFilter === "ALL" || user.status === statusFilter;
      return matchesStatus;
    });
  }, [statusFilter]);

  const getDynamicTitle = (prefix = "") => {
    const titleMap = {
      PENDING: "Pending Records",
      COMPLETED: "Completed Records",
      "TO RECEIVE": "To Receive Records",
      DECLINED: "Declined Records",
      ALL: "All Records",
    };

    return `${prefix}${
      titleMap[statusFilter as keyof typeof titleMap] || titleMap.ALL
    }`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[1000px] sm:h-[1100px] lg:h-[1500px]">
      <div className="flex flex-col items-center w-[90vw] lg:w-[70vw] xl:w-[65vw]">
        <h1 className="flex text-4xl font-semibold lg:mb-8 font-montserrat text-center">
          {getDynamicTitle("Viewing ")}
        </h1>

        <Dropdown className="bg-blue-400">
          <DropdownTrigger>
            <Button
              isIconOnly
              className="flex lg:hidden bg-blue-400 text-white my-4"
              title="Dashboard Sidebar Button"
            >
              <RxHamburgerMenu size={18} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dashboard Sidebar"
            items={items}
            onAction={(key) => setStatusFilter(key as string)}
          >
            {(item) => (
              <DropdownItem
                key={item.key}
                className={`font-bebas text-white ${
                  statusFilter === item.key ? "bg-white text-blue-400" : ""
                }`}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>

        <Suspense fallback={<Loading />}>
          <div className="flex flex-col w-full h-[700px] sm:h-[800px] lg:h-[1250px] border border-black">
            <div className="h-1/5 lg:h-1/4">
              <div className="flex relative items-center justify-center">
                <div className="absolute left-2 sm:left-4 lg:left-10 top-4 sm:top-6 lg:top-10">
                  <div className="lg:w-28 lg:h-28 w-14 h-14 sm:w-20 sm:h-20 relative">
                    <Image src={makatiImg} alt="Makati Logo" fill />
                  </div>
                </div>
                <div className="flex flex-col mt-4 lg:mt-10 text-center font-montserrat">
                  <span className="text-[10px] sm:text-base lg:text-xl uppercase">
                    Republic of the Philippines
                  </span>
                  <span className="text-[10px] sm:text-base lg:text-2xl uppercase font-bold">
                    City of Makati
                  </span>
                  <span className="text-[10px] sm:text-base lg:text-3xl uppercase font-bold">
                    Barangay 28 - Comembo
                  </span>
                  <span className="text-[10px] sm:text-base lg:text-xl uppercase">
                    Anahaw St., Comembo, Makati City
                  </span>
                  <span className="text-[10px] sm:text-base lg:text-xl uppercase">
                    Tel. No. 7738-1883 / 7754-3045
                  </span>
                  <span className="text-base lg:text-4xl font-bold mt-6 sm:mt-4 lg:mt-10">
                    {getDynamicTitle()}
                  </span>
                </div>
                <div className="absolute right-2 sm:right-4 lg:right-10 top-4 sm:top-6 lg:top-10">
                  <div className="relative lg:w-28 lg:h-28 w-14 h-14 sm:w-20 sm:h-20">
                    <Image src={comemboImg} alt="Comembo Logo" fill />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow h-4/5 lg:h-3/4 items-center justify-center m-4 sm:mt-8 lg:mx-4 overflow-y-scroll scrollbar-hide">
              <DashboardTable
                removeWrapper= {true}
                dashboardRows={filteredItems}
                isUserIdClickable={false}
              />
            </div>
          </div>
        </Suspense>
        <div className="flex mt-4 font-bebas">
          <Button
            className="text-4xl bg-blue-400 text-white w-[151px] h-[57px] rounded-xl"
            isDisabled
          >
            Print
          </Button>
        </div>
      </div>
    </div>
  );
}

'use client'

import { bebasNeue, montserrat } from "@/app/fonts/fonts";

import DashboardModal from "../modals/Modal";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

import { dashboardColumns } from "@/data/users/columns";

import { useState } from "react";


interface DashboardTableProps {
  removeWrapper?: boolean;
  dashboardRows?: Array<{
    id: number;
    key: string;
    userId: string;
    fullName: string;
    address: string;
    contactNo: string;
    gender: string;
    age: string;
    purpose: string;
    status: string;
    date: string;
    officialReceipt: string;
  }>;
  isUserIdClickable?: boolean;
}

export default function DashboardTable({
  removeWrapper,
  dashboardRows,
  isUserIdClickable = true,
}: DashboardTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  
  const handleUserIdClick = (userId: string) => {
    setIsModalOpen(true);
    setSelectedUser(userId);
  };

  return (
    <>
      <Table
        layout="auto"
        isStriped
        aria-label="Example table with dynamic content"
        style={{ height: "700px" }}
        {...(removeWrapper && { removeWrapper: true })}
      >
        <TableHeader columns={dashboardColumns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align="center"
              className={`text-black text-xl ${bebasNeue.className}`}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={dashboardRows}
          emptyContent={"No contents to display."}
        >
          {(item) => (
            <TableRow
              key={item.key}
              className={`text-black text-xl ${montserrat.className}`}
            >
              {(columnKey) => (
                <TableCell className="w-20">
                  {columnKey === "userId" ? (
                    isUserIdClickable ? ( // Conditionally render based on prop
                      <button
                        onClick={() =>
                          handleUserIdClick(getKeyValue(item, "userId"))
                        }
                        className="text-blue-600 hover:text-blue-800 underline focus:outline-none"
                      >
                        {getKeyValue(item, columnKey)}
                      </button>
                    ) : (
                      <span>{getKeyValue(item, columnKey)}</span> // Display as plain text
                    )
                  ) : columnKey === "status" ? (
                    <span
                      className={`px-2 py-1 rounded ${getStatusClass(
                        item.status
                      )}`}
                    >
                      {getKeyValue(item, columnKey)}
                    </span>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DashboardModal
        userId={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'COMPLETED':
      return 'bg-green text-green-100 font-bold';
    case 'TO RECEIVE':
      return 'bg-yellow text-yellow-100 font-bold';
    case 'PENDING':
      return 'bg-gray text-gray-50 font-bold';
    case 'DECLINED':
      return 'bg-red text-red-100 font-bold';
    default:
      return '';
  }
};
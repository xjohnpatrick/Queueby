'use client'

import { bebasNeue, montserrat } from "@/app/fonts/fonts";

import DashboardModal from "./Modal";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

import { dashboardColumns } from "@/data/users/columns";

import { useState } from "react";
import { dashboardRows } from "@/data/users/rows";

export default function DashboardTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserIdClick = (userId: string) => {
    setIsModalOpen(true);
    setSelectedUser(userId)
  };

  return (
    <>
    <Table layout="auto" isStriped aria-label="Example table with dynamic content" style={{ height: "700px" }}>
      <TableHeader columns={dashboardColumns}>
        {(column) => <TableColumn key={column.key} align="center" className={`text-black text-xl ${bebasNeue.className}`}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={dashboardRows} emptyContent={"No contents to display."}>
        {(item) => (
           <TableRow key={item.key} className={`text-black text-xl ${montserrat.className}`}>
            {(columnKey) => (
              <TableCell className="w-20">
                {columnKey === 'userId' ? (
                  <button 
                    onClick={() => handleUserIdClick(getKeyValue(item, 'userId'))}
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none"
                  >
                    {getKeyValue(item, columnKey)}
                  </button>
                ) : columnKey === 'status' ? (
                  <span className={`px-2 py-1 rounded ${getStatusClass(item.status)}`}>
                    {getKeyValue(item, columnKey)}
                  </span>
                )  : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <DashboardModal userId={selectedUser} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
'use client'

import { bebasNeue, montserrat } from "@/app/fonts/fonts";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

import { databaseColumns } from "@/data/users/columns";
import { databaseRows } from "@/data/users/rows";

export default function DatabaseTable() {
    return (
      <Table layout="auto" isStriped aria-label="Example table with dynamic content" style={{ height: "700px" }}>
        <TableHeader columns={databaseColumns}>
          {(column) => <TableColumn key={column.key} align="center" className={`text-black text-xl ${bebasNeue.className}`}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={databaseRows} emptyContent={"No contents to display."}>
          {(item) => (
             <TableRow key={item.key} className={`text-black text-xl ${montserrat.className}`}>
              {(columnKey) => (<TableCell className="w-20">{getKeyValue(item, columnKey)}</TableCell>)}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
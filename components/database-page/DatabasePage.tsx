"use client";
import { databaseRows } from '@/data/users/rows';
import React, { Suspense, useMemo, useState } from 'react'
import SearchBar from '../SearchBar';
import DatabaseTable from '../ui/DatabaseTable';
import Loading from '@/components/ui/loading-ui/SpinnerLoading';

export default function DatabasePage() {
    const [filterValue, setFilterValue] = useState("");

    const onSearchChange = (value: string) => {
      setFilterValue(value);
    };

    const filteredItems = useMemo(() => {
      return databaseRows.filter((user) =>
        user.firstName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }, [filterValue]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SearchBar filterValue={filterValue} onSearchChange={onSearchChange} />

      <Suspense fallback={<Loading />}>
        <div className="flex w-[80vw] h-[70vh] bg-white mb-24 ">
          <DatabaseTable databaseRows={filteredItems} />
        </div>
      </Suspense>
    </div>
  );
}

'use client'

import { bebasNeue } from '@/app/fonts/fonts'

import Link from 'next/link'

import React, { useState } from 'react'

import { MdSpaceDashboard } from "react-icons/md";
import { ImFileText } from "react-icons/im";
import { LuFiles } from "react-icons/lu";
import { RiDatabaseLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="flex flex-col">
    <div className='flex h-32 bg-blue-200'>
        <div className={`flex text-white w-full items-center ${bebasNeue.className}`}>

          <div className='flex items-center absolute left-10 gap-4'>
            <div className='flex gap-2'>
              <img 
              src="/makati.png" 
              alt="Makati Logo" 
              className='w-14 h-14 lg:w-20 lg:h-20'
              />
              <img 
              src="/comembo.png" 
              alt="Comembo Logo" 
              className='w-14 h-14 lg:w-20 lg:h-20'
              />
            </div>
            <div className='flex mt-2 lg:mt-3'>
              <button className='flex flex-col leading-4 text-2xl lg:text-4xl'>Barangay Comembo
                <span className='text-xl lg:text-2xl'>Powered by queueby</span>
              </button>
            </div>
          </div>

          
          <div className='hidden lg:flex gap-16 text-4xl items-center absolute right-10'>
          
            <Link href="/main/dashboard">
            <button className='flex gap-2 px-4 py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out'>
              <MdSpaceDashboard />
              Dashboard
            </button>
            </Link>

            <button
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className={`flex relative gap-2 px-4 py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out ${isOpen ? 'bg-blue-100' : ''}`}>
              <ImFileText />
                Document
              <div className='bg-transparent absolute -bottom-10 left-0 w-full h-10'/>
            </button> 

            <Link href="/main/records-page">
            <button className='flex gap-2 px-4 py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out'>
              <LuFiles />
              Records
            </button>
            </Link>

            <Link href="/main/database-page">
            <button className='flex gap-2 px-4 py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out'>
              <RiDatabaseLine />
              Database
            </button>
            </Link>

            <button className='flex gap-2 px-4 py-8 rounded-xl hover:bg-blue-100 duration-400 ease-in-out items-center'>
              <img 
              src="/femaleProfile.png" 
              alt="Female Default Profile" 
              className='w-12 h-12'
              />
              Profile
            </button>
            
          </div>
          
          </div>       
      </div>

      {isOpen && (
      <div className={`flex h-32 w-full justify-center items-center bg-blue-100 ${bebasNeue.className}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <div className="flex gap-10">
          <Link href='/main/documents-page/barangay-permit'>
            <button className='flex bg-blue-400 text-white h-24 w-[240px] justify-center items-center rounded-xl text-2xl'>Barangay Permit</button>
          </Link>

          <Link href='/main/documents-page/business-permit'>
            <button className='flex bg-blue-400 text-white h-24 w-[240px] justify-center items-center rounded-xl text-2xl'>Business Permit</button>
          </Link>

          <Link href='/main/documents-page/firstTimeJobSeeker'>
            <button className='flex bg-blue-400 text-white h-24 w-[240px] justify-center items-center rounded-xl text-2xl'>Barangay Certificate For First Time Job Seeker</button>
          </Link>

          <Link href='/main/documents-page/barangay-certification'>
            <button className='flex bg-blue-400 text-white h-24 w-[240px] justify-center items-center rounded-xl text-2xl'>Barangay Certification</button>
          </Link>

          <Link href='/main/documents-page/certificateOfClearance'>
            <button className='flex bg-blue-400 text-white h-24 w-[240px] justify-center items-center rounded-xl text-2xl'>Certificate of Clearance</button>
          </Link>
        </div>
      </div>
    )}

  </div>
  );
};


export default Navbar;
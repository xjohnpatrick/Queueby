import { bebasNeue } from '@/app/fonts/fonts'

import Link from 'next/link'
import React from 'react'

import { MdSpaceDashboard } from "react-icons/md";
import { ImFileText } from "react-icons/im";
import { LuFiles } from "react-icons/lu";
import { RiDatabaseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='flex h-32 bg-blue-200'>
        <div className={`flex text-white w-full items-center ${bebasNeue.className}`}>

          <div className='flex items-center absolute left-10'>
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
            <div className='flex mt-2 lg:mt-4'>
              <button className='flex flex-col leading-4 text-2xl lg:text-4xl'>Barangay Comembo
                <span className='text-xl lg:text-2xl'>Powered by queueby</span>
              </button>
            </div>
          </div>

          <div className='hidden lg:flex gap-24 text-4xl items-center absolute right-10'>
            <Link href="#">
            <button className='flex gap-2'>
              <MdSpaceDashboard />
              Dashboard
            </button>
            </Link>

            <Link href="#">
            <button className='flex gap-2'>
            <ImFileText />
              Documents
            </button>
            </Link>

            <Link href="#">
            <button className='flex gap-2'>
              <LuFiles />
              Records
            </button>
            </Link>

            <Link href="#">
            <button className='flex gap-2'>
              <RiDatabaseLine />
              Database
            </button>
            </Link>

            <button className='flex gap-2 items-center'>
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
  )
}

export default Navbar
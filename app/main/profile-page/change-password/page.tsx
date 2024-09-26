'use client'

import { bebasNeue, montserrat } from '@/app/fonts/fonts'

import { Button } from '@nextui-org/button'

import Link from 'next/link'
import React from 'react'

import { FaArrowLeft } from "react-icons/fa";

const ChangePassword = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full bg-blue-100'>
        <div className="flex relative justify-center bg-white w-[75vw] lg:w-[60vw] h-[80vh] xl:h-[70vh] rounded-md">

                <Link href="/main/profile-page/profile">
                    <Button
                    className={`absolute top-2 left-2 lg:top-5 lg:left-5 bg-white md:text-lg lg:text-xl text-blue-400 ${montserrat.className}`}
                    size='sm'
                    >
                        <FaArrowLeft/>Back
                    </Button>
                </Link>
              
            <div className={`flex flex-col w-full lg:w-[45vw] items-center gap-12 lg:gap-24 ${bebasNeue.className}`}>
                
                <h1 className='flex text-4xl xl:text-5xl text-blue-400 mt-16 text-center'>Change Password</h1>

                    <div className="flex flex-col text-blue-400 text-3xl w-full gap-12">

                        <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-16">
                            <label className='text-nowrap'>Current Password:</label>
                            <input 
                            className={`w-[300px] md:w-[400px] lg:w-[540px] placeholder:text-xl text-xl py-2 px-3 border border-black rounded-lg ${montserrat.className}`}
                            type='password'
                            />
                        </div>

                        <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-[106px]">
                            <label className='text-nowrap'>New Password:</label>
                            <input 
                            className={`w-[300px] md:w-[400px] lg:w-[540px] placeholder:text-xl text-xl py-2 px-3 border border-black rounded-lg ${montserrat.className}`}
                            type='password'
                            />
                        </div>

                        <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-5">
                            <label className='text-nowrap'>Confirm New Password:</label>
                            <input 
                            className={`w-[300px] md:w-[400px] lg:w-[540px] placeholder:text-xl text-xl py-2 px-3 border border-black rounded-lg ${montserrat.className}`}
                            type='password'
                            />
                        </div>
                    </div>

                    <Button
                        
                        className='bg-blue-400 text-white text-3xl w-[250px] md:w-[300px] lg:w-[320px]'
                        size='lg'
                    >Change Password</Button>
            </div>

        </div>
    </div>
  )
}

export default ChangePassword
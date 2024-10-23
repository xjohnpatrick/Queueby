'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { bebasNeue, montserrat } from '@/app/fonts/fonts'

import { FaArrowLeft } from "react-icons/fa";

import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";


const VerifyEmail = () => {
  return (
    <div className='flex h-screen w-full relative items-center justify-center bg-gradient-to-tr from-blue-200 to-blue-200'>
        <img className="object-cover h-full w-full absolute mix-blend-overlay opacity-50" src='/makatibg.jpg' alt='Makati Background'/>

        <div className='flex h-[65vh] flex-col lg:flex-row items-center z-10 shadow-lg shadow-slate-800 rounded-3xl'>

            <div className="flex w-[420px] h-[400px] sm:w-[520px] md:w-[620px] lg:w-[400px] lg:h-full bg-gradient-to-br from-blue-100 to-blue rounded-t-3xl lg:rounded-none lg:rounded-l-3xl relative">
                <img 
                className='object-cover h-full w-full absolute mix-blend-overlay opacity-40 rounded-t-3xl lg:rounded-none lg:rounded-l-3xl'
                src="/makatibg.jpg" 
                alt="Makati Background" 
                />

                <div className="flex flex-col gap-6 items-center justify-center w-full font-bebas">
                    <div className="flex gap-4">
                        <img 
                        className='w-20 h-20 lg:w-28 lg:h-28'
                        src="/makati.png" 
                        alt="Makati Logo" 
                        />
                        <img 
                        className='w-20 h-20 lg:w-28 lg:h-28'
                        src="/comembo.png" 
                        alt="Makati Logo" 
                        />
                    </div>
                    <div className="flex flex-col text-white text-center gap-4">
                        <div className='flex lg:flex-col gap-1 leading-8'>
                            <h1 className='text-3xl lg:text-5xl uppercase'>Barangay Comembo</h1>
                            <h1 className='text-3xl lg:text-5xl uppercase'>Information System</h1>
                        </div>
                        <div className='flex lg:flex-col gap-1 leading-8 justify-center'>
                            <h1 className='text-2xl lg:text-3xl uppercase'>in collaboration with</h1>
                            <h1 className='text-2xl lg:text-3xl uppercase'>queueby</h1>
                        </div> 
                    </div>
                </div>             
            </div>

            <div className="flex relative flex-col items-center justify-center w-[420px] h-[600px] sm:w-[520px] md:w-[620px] lg:w-[600px] lg:h-full lg:rounded-none lg:rounded-r-3xl bg-white rounded-b-3xl">  
                <Link href="/auth/forgot-password">
                    <Button
                    className="absolute top-2 right-2 lg:left-2 lg:right-auto bg-white md:text-lg lg:text-xl text-blue-400 font-montserrat"
                    size='sm'
                    >
                        <FaArrowLeft/>Back
                    </Button>
                </Link>
                <div className="flex flex-col gap-2 mb-3 lg:mb-5 items-center font-bebas">
                    <img 
                    src="/verifyemail.jpg" 
                    alt="Verify Email Logo" 
                    className='w-40 lg:w-60'
                    />
                </div>
                <div className="flex flex-col gap-4 relative">
                     <div className='mx-10 sm:mx-14 text-justify text-gray-100 text-sm md:text-lg lg:text-xl'>
                        <span className="flex font-montserrat">An email has been sent to user@gmail.com with instructions to reset password. If you have not received an email after a few minutes, check your spam folder.</span>
                     </div>
                </div>
                <div className='flex flex-col mt-2 lg:mt-12 items-center'>
                    <input 
                    className="mb-6 lg:mb-[71px] lg:w-[415px] h-12 rounded-lg border-2 border-gray px-4 font-montserrat"
                    type='text'
                    placeholder='Input verification code here'
                    />

                    <Link href="/auth/reset-password">
                        <Button 
                        className="bg-blue-400 w-[280px] text-3xl text-white font-bebas"
                        radius='sm'
                        >
                           Next
                        </Button>
                    </Link>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default VerifyEmail
'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { bebasNeue, montserrat } from '@/app/fonts/fonts'

import { FaArrowLeft } from "react-icons/fa";

import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";


const ForgotPassword = () => {
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

                <div className={`flex flex-col gap-6 items-center justify-center w-full ${bebasNeue.className}`}>
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
                <Link href="/auth/sign-in">
                    <Button
                    className={`absolute top-2 right-2 lg:left-2 lg:right-auto bg-white md:text-lg lg:text-xl text-blue-400 ${montserrat.className}`}
                    size='sm'
                    >
                        <FaArrowLeft/>Back
                    </Button>
                </Link>
                <div className={`flex flex-col gap-2 mb-5 items-center ${bebasNeue.className}`}>
                    <h1 className='uppercase text-4xl lg:text-6xl'>
                        Reset Password
                    </h1>
                </div>
                <div className="flex flex-col gap-4 relative">
                     <div className='mx-10 sm:mx-14 lg:mx-24 text-justify text-gray-100 md:text-lg lg:text-xl'>
                        <span className={`flex ${montserrat.className}`}>Enter the email associated with your account and we&apos;ll send an email with instructions to reset your password.</span>
                     </div>
                </div>
                <div className='flex flex-col mt-12 items-center'>
                    <Input 
                    className={`mb-10 lg:mb-[71px] lg:w-[415px] text-blue-200 ${montserrat.className}`}
                    label='Email address'
                    labelPlacement='outside'
                    radius='full'
                    type='email'
                    placeholder='Enter your email address'
                    />

                    <Link href="/auth/verify-email">
                        <Button 
                        className={`bg-blue-400 w-[280px] text-3xl text-white ${bebasNeue.className}`}
                        radius='sm'
                        size='lg'
                        >
                           Send Instructions
                        </Button>
                    </Link>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default ForgotPassword
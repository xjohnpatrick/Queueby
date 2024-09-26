'use client'

import { bebasNeue, montserrat } from '@/app/fonts/fonts'

import { Button } from '@nextui-org/button'

import Link from 'next/link'
import React, { useState } from 'react'

import { FaArrowLeft } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

import { buttonValidation } from "@/app/main/profile-page/edit-profile/edit-profile-functions"

const EditProfile = () => {
    const {
        isDisable,
        visible,
        toggleDisable,
        handleClose,
    } = buttonValidation();
  return (
    <div className='flex items-center justify-center h-screen w-full bg-blue-100'>
        <div className="flex relative justify-center bg-white w-[75vw] lg:w-[60vw] h-[80vh] rounded-md">

                <Link href="/main/profile-page/profile">
                    <Button
                    className={`absolute top-2 left-2 lg:top-5 lg:left-5 bg-white md:text-lg lg:text-xl text-blue-400 ${montserrat.className}`}
                    size='sm'
                    >
                        <FaArrowLeft/>Back
                    </Button>
                </Link>
                {(visible && 
                <Button
                    onClick={handleClose}
                    className={`absolute top-2 right-2 lg:top-5 lg:right-5 text-blue-400 bg-white ${montserrat.className}`}
                    size='sm'
                    isIconOnly
                    >
                    <RiCloseFill size={24}/>
                </Button>
                )}
            <div className={`flex flex-col w-full lg:w-[40vw] items-center gap-12 lg:gap-24 ${bebasNeue.className}`}>
                
                <h1 className='flex text-4xl xl:text-5xl text-blue-400 mt-16 text-center'>Edit personal information</h1>

                    <div className="flex flex-col text-blue-400 text-3xl w-full gap-4 lg:gap-8 xl:gap-12">
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <label className='text-nowrap'>First Name:</label>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg ${montserrat.className}`}
                            placeholder='Webster'
                            disabled={isDisable}
                            type='text'
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
                            <label className='text-nowrap'>Last Name:</label>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg ${montserrat.className}`}
                            placeholder='Retardo'
                            disabled={isDisable}
                            type='text'
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
                            <label className='text-nowrap'>Email:</label>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg ${montserrat.className}`}
                            placeholder='websterdalupangretardothethird@gmail.com'
                            disabled={isDisable}
                            type='text'
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                            <label>Username:</label>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg ${montserrat.className}`}
                            placeholder='WebsterBorat'
                            disabled={isDisable}
                            type='text'
                            />
                        </div>
                    </div>
                    <Button
                        onClick={toggleDisable}
                        className='bg-blue-400 text-white text-3xl lg:w-[320px]'
                        size='lg'
                    >Edit Profile</Button>
            </div>

        </div>
    </div>
  )
}

export default EditProfile
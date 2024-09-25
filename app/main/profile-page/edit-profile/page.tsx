'use client'

import { bebasNeue, montserrat } from '@/app/fonts/fonts'

import { Button } from '@nextui-org/button'

import Link from 'next/link'
import React, { useState } from 'react'

import { FaArrowLeft } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const EditProfile = () => {
    const [isDisable, setIsDisable] = useState(true);
    const [visible, setVisible] = useState(false);

    const toggleDisable = () => {
        setIsDisable(false);
        setVisible(true);
    }

    const handleClose = () => {
        setIsDisable(true);
        setVisible(false);
    }
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
                
                <h1 className='flex text-5xl text-blue-400 mt-12 text-center'>Edit personal information</h1>

                    <div className="flex flex-col text-blue-400 text-3xl w-full gap-4 lg:gap-8 xl:gap-12">
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <span className='text-nowrap'>First Name:</span>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl py-2 pl-3 border border-black rounded-lg ${montserrat.className}`}
                            placeholder='Webster'
                            disabled={isDisable}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
                            <span className='text-nowrap'>Last Name:</span>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl py-2 pl-3 border border-black rounded-lg ${montserrat.className}`}
                            placeholder='Retardo'
                            disabled={isDisable}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
                            <span className='text-nowrap'>Email:</span>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl py-2 pl-3 border border-black rounded-lg ${montserrat.className}`}
                            placeholder='websterdalupangretardothethird@gmail.com'
                            disabled={isDisable}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                            <span>Username:</span>
                            <input 
                            className={`w-[240px] md:w-[300px] lg:w-[540px] placeholder:text-xl py-2 pl-3 border border-black rounded-lg ${montserrat.className}`}
                            placeholder='WebsterBorat'
                            disabled={isDisable}
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
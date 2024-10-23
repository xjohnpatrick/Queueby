import React from 'react'
import Link from 'next/link';

import { bebasNeue, montserrat } from '@/app/fonts/fonts'

import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { Button } from "@nextui-org/button";


const SignIn = () => {
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

            <div className="flex flex-col items-center justify-center w-[420px] h-[600px] sm:w-[520px] md:w-[620px] lg:w-[600px] lg:h-full lg:rounded-none lg:rounded-r-3xl bg-white rounded-b-3xl">  
                <div className="flex flex-col gap-2 mb-5 items-center font-bebas">
                    <h1 className='uppercase text-4xl lg:text-6xl'>
                        Welcome back,
                    </h1>
                    <h1 className='uppercase text-4xl lg:text-6xl'>
                        sign in your account
                    </h1>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <div className="flex relative items-center">
                        <input
                        className="w-[324px] h-[49px] py-2 pr-2 pl-10 text-lg ring-2 rounded-md ring-gray-300 outline-none font-montserrat"
                        type='text' 
                        placeholder='Username'
                        />
                        <FaUser 
                        size={22}
                        className='absolute left-2'
                        />
                    </div>  
                    <div className='flex relative items-center'>
                        <input 
                        className="w-[324px] h-[49px] py-2 pr-2 pl-10 text-lg ring-2 rounded-md ring-gray-300 outline-none font-montserrat"
                        type='password' 
                        placeholder='Password'
                        />
                        <IoMdLock 
                        size={28}
                        className='absolute left-2'
                        />
                    </div>
                    <Link href="/auth/forgot-password">
                        <span className="underline text-blue-100 absolute bottom-[-20px] right-0 text-md font-montserrat">Forgot your password?</span>
                    </Link>  
                </div>
                <div className='flex mt-12'>
                    <Link href="/main/dashboard">
                        <Button 
                        className="bg-blue-400 w-[170px] text-3xl text-white font-bebas"
                        radius='sm'
                        size='lg'
                        >
                            Sign In
                        </Button>
                    </Link>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default SignIn
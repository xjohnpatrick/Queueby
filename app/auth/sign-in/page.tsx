import React from 'react'
import Link from 'next/link';

import { bebasNeue, poppins } from '@/app/fonts/fonts'

import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { Button } from "@nextui-org/button";


const SignIn = () => {
  return (
    <div className='flex h-screen w-full relative items-center justify-center bg-gradient-to-tr from-blue-200 to-blue-200'>
        <img className="object-cover h-full w-full absolute mix-blend-overlay opacity-50" src='/makatibg.jpg' alt='Makati Background'/>

        <div className='flex w-[55vw] h-[65vh] lg:flex-row flex-col items-center z-10 shadow-lg shadow-slate-800 rounded-3xl'>

            <div className="flex w-[420px] h-[400px] sm:h-full sm:w-full lg:w-[550px] bg-gradient-to-tr from-blue-100 to-blue-100 lg:rounded-l-3xl lg:rounded-none rounded-t-3xl relative">
                <img 
                className='object-cover h-full w-full absolute mix-blend-overlay opacity-50 lg:rounded-l-3xl lg:rounded-none rounded-t-3xl'
                src="/makatibg.jpg" 
                alt="Makati Background" 
                />

                <div className={`flex flex-col gap-6 items-center justify-center w-full ${bebasNeue.className}`}>
                    <div className="flex gap-4">
                        <img 
                        className='md:w-26 md:h-26 lg:w-32 lg:h-32 w-20 h-20'
                        src="/makati.png" 
                        alt="Makati Logo" 
                        />
                        <img 
                        className='md:w-26 md:h-26 lg:w-32 lg:h-32 w-20 h-20'
                        src="/comembo.png" 
                        alt="Makati Logo" 
                        />
                    </div>
                    <div className="flex flex-col text-white text-center gap-4">
                        <div className='flex sm:flex-col md:flex-row lg:flex-col gap-1 leading-8'>
                            <h1 className='lg:text-5xl text-3xl uppercase'>Barangay Comembo</h1>
                            <h1 className='md:text-3xl lg:text-5xl text-3xl uppercase'>Information System</h1>
                        </div>
                        <div className='flex lg:flex-col gap-1 leading-8 justify-center'>
                            <h1 className='lg:text-3xl text-2xl uppercase'>in collaboration with</h1>
                            <h1 className='lg:text-3xl text-2xl uppercase'>queueby</h1>
                        </div>     
                        
                    </div>
                </div>             
            </div>

            <div className="flex flex-col items-center justify-center sm:w-full sm:h-full w-[420px] h-[600px] bg-white lg:rounded-r-3xl lg:rounded-none rounded-b-3xl p-4">  
                <div className={`flex flex-col gap-2 mb-10 items-center ${bebasNeue.className}`}>
                    <h1 className='uppercase text-5xl'>
                        Welcome back,
                    </h1>
                    <h1 className='uppercase text-5xl'>
                        sign in your account
                    </h1>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <div className="flex relative items-center">
                        <input
                        className={`w-[324px]  h-[49px] py-2 pr-2 pl-10 text-lg ring-2 rounded-md ring-gray-300 outline-none font-sans ${poppins.className} placeholder:font-extralight`}
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
                        className={`w-[324px] h-[49px] py-2 pr-2 pl-10 text-lg ring-2 rounded-md ring-gray-300 outline-none font-sans ${poppins.className} placeholder:font-extralight`}
                        type='password' 
                        placeholder='Password'
                        />
                        <IoMdLock 
                        size={28}
                        className='absolute left-2'
                        />
                    </div>
                    <Link href="#" className={`underline text-blue-100 absolute bottom-[-30px] right-0 text-md ${poppins.className} font-extralight`}>Forgot your password?</Link>  
                </div>
                <div className='flex mt-20'>
                    <Link href="/dashboard">
                        <Button 
                        className={`bg-blue-400 w-[170px] text-3xl text-white ${bebasNeue.className}`}
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
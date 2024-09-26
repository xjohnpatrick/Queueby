'use client'

import Link from 'next/link';

import { bebasNeue, montserrat } from '@/app/fonts/fonts'

import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";

import { usePasswordValidation } from "@/app/auth/reset-password/reset-password-functions"

const ResetPassword = () => {
    const {
        password,
        confirmPassword,
        disable,
        error,
        handlePasswordChange,
        handleConfirmPasswordChange,
    } = usePasswordValidation();

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

            <div className="flex flex-col items-center justify-center w-[420px] h-[600px] sm:w-[520px] md:w-[620px] lg:w-[600px] lg:h-full lg:rounded-none lg:rounded-r-3xl bg-white rounded-b-3xl">
                <div className={`flex flex-col gap-2 mb-3 lg:mb-5 items-center ${bebasNeue.className}`}>
                    <h1 className='uppercase text-4xl lg:text-5xl'>
                        Create new password
                    </h1>
                </div>

                <div className="flex flex-col gap-4 relative">
                     <div className='mx-10 sm:mx-16 text-justify text-gray-100 text-sm md:text-lg lg:text-xl'>
                        <span className={`flex ${montserrat.className}`}>Your new password must be different from your previous passwords.</span>
                     </div>
                </div>

                <div className='flex flex-col mt-2 lg:mt-12 items-center'>
                    <Input 
                    className={`md:w-[415px] text-blue-200 ${montserrat.className}`}
                    radius='sm'
                    type='password'
                    label='New Password'
                    labelPlacement='outside'
                    placeholder='New Password'
                    value={password}
                    onChange={handlePasswordChange}
                    />
                    <label className={`text-gray-100 text-sm md:text-lg lg:text-xl mb-6 lg:mb-[71px] ${montserrat.className}`}>Must be at least 8 characters</label>

                    <Input 
                    className={`lg:w-[415px] text-blue-200 ${montserrat.className}`}
                    radius='sm'
                    type='password'
                    label='Confirm Password'
                    labelPlacement='outside'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    />
                    <label className={`text-gray-100 text-sm md:text-lg lg:text-xl mb-2 lg:mb-[71px] ${montserrat.className}`}>Both passwords must match</label>

                    <Link href="/auth/sign-in">
                        <Button
                        isDisabled={disable}
                        className={`bg-blue-400 w-[280px] text-3xl text-white ${bebasNeue.className}`}
                        radius='sm'
                        >
                           Next
                        </Button>
                    </Link>

                    {error && (
                     <div className={`flex absolute text-white bg-red-500 rounded-md p-4 text-sm bottom-4 right-6 ${montserrat.className}`}>
                        <p>{error}</p>
                    </div>
                    )}

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default ResetPassword
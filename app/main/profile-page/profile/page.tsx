import { bebasNeue, montserrat } from '@/app/fonts/fonts'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <div className='h-screen w-full bg-blue-100 flex items-center justify-center'>
        <div className='flex flex-col justify-center lg:flex-row h-[90vh] lg:h-[80vh] w-[70vw] bg-white rounded-md'>

            <div className="flex flex-col lg:w-1/2 lg:my-16 lg:border-r-medium lg:border-b-0 border-b-medium border-blue-400">
                <div className="flex flex-col items-center">
                    <h1 className={`uppercase text-blue-400 text-4xl mt-16 ${bebasNeue.className}`}>Personal Information</h1>
                    <img 
                    src="/femaleProfile.png" 
                    alt="Female Default Profile" 
                    className='mt-6 mb-4 w-32 h-32'
                    />
                    <Link href="#">
                        <span className={`underline text-blue-200 text-sm ${montserrat.className}`}>
                            Change Profile Picture
                        </span>
                    </Link>
                </div>
                <div className={`flex flex-col items-center justify-center text-lg lg:text-3xl mx-10 my-16 lg:mb-0 lg:mt-28 gap-4 ${bebasNeue.className}`}>
                    <div className="flex gap-4 items-center">
                        <h1 className='text-blue-400'>Username:</h1>
                        <p className='text-blue-400 text-lg lg:text-2xl break-all'>Webster Dalupang Retardo The Third</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <h1 className='text-blue-400'>Email:</h1>
                        <p className='text-blue-400 text-lg lg:text-2xl break-all'>websterthethirdfourthfifth@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center lg:w-1/2 mt-12 lg:my-16">
                <div className={`flex flex-col gap-4 ${bebasNeue.className}`}>
                    <Link href="/main/profile-page/edit-profile">
                        <Button 
                        size='lg'
                        radius='md'
                        className='uppercase bg-blue-400 text-3xl text-white w-[280px] lg:w-[300px] xl:w-[380px]'>
                            Edit your profile
                        </Button>
                    </Link>

                    <Link href="/main/profile-page/createAdminAcc">
                        <Button 
                        size='lg'
                        radius='md'
                        className='uppercase bg-blue-400 text-3xl text-white w-[280px] lg:w-[300px] xl:w-[380px]'>
                            Create Admin Account
                        </Button>
                    </Link>

                    <Link href="/main/profile-page/change-password">
                        <Button 
                        size='lg'
                        radius='md'
                        className='uppercase bg-blue-400 text-3xl text-white w-[280px] lg:w-[300px] xl:w-[380px]'>
                            Change your password
                        </Button> 
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Profile
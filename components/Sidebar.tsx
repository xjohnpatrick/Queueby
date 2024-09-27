import { bebasNeue } from '@/app/fonts/fonts'
import { Button } from '@nextui-org/button'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='hidden lg:flex h-full w-56 bg-blue-400'>
        <div className={`flex flex-col w-full relative ${bebasNeue.className}`}>
            <Button 
            size='lg'
            radius='none'
            className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px] sticky top-0'>All</Button>
            <Button 
            size='lg'
            radius='none'
            className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px] sticky top-[88px]'>Pending</Button>
            <Button 
            size='lg'
            radius='none'
            className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px] sticky top-[176px]'>To Receive</Button>
            <Button 
            size='lg'
            radius='none'
            className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px] sticky top-[264px]'>Completed</Button>
        </div>
    </aside>
  )
}

export default Sidebar
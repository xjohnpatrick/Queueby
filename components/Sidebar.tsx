import { bebasNeue } from '@/app/fonts/fonts'
import { Button } from '@nextui-org/button'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='hidden lg:flex h-full w-56 bg-blue-400'>
        <div className={`flex flex-col w-full ${bebasNeue.className}`}>
          <Button 
          size='lg'
          radius='none'
          className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px]'>All</Button>
          <Button 
          size='lg'
          radius='none'
          className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px]'>Pending</Button>
          <Button 
          size='lg'
          radius='none'
          className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px]'>To Receive</Button>
          <Button 
          size='lg'
          radius='none'
          className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[40px] h-[88px]'>Completed</Button>
        </div>
    </aside>
  )
}

export default Sidebar
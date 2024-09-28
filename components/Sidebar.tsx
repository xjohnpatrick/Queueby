import { bebasNeue } from '@/app/fonts/fonts'
import { Button } from '@nextui-org/button'
import React from 'react'

// Define the type for a single button object
interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional onClick handler
}

// Define the type for the Sidebar props
interface SidebarProps {
  buttons?: ButtonProps[]; // Array of button objects
}

const Sidebar: React.FC<SidebarProps> = ({ buttons = [] }) => {
  return (
    <aside className='hidden lg:flex h-full w-60 bg-blue-400'>
        <div className={`flex flex-col w-full relative ${bebasNeue.className}`}>
        {buttons.map((button, index) => (
          <>
          <Button
            key={index}
            onClick={button.onClick}
            size='lg'
            radius='none'
            className='bg-blue-400 text-white border-b-2 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[35px] h-[88px] sticky'
            style={{ top: `${index * 88}px` }}
          >
            {button.text}
          </Button>
          </>
          ))}
        </div>
    </aside>
  )
}

export default Sidebar
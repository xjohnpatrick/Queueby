"use client";
import { Button } from '@nextui-org/button'
import React from 'react'
import { useButtonContext } from '../context/ButtonContext';

const Sidebar: React.FC = () => {
  const { buttons, toggleButtonActive } = useButtonContext();
  return (
    <aside className="hidden lg:flex h-auto w-60 bg-blue-400">
      <div className="flex flex-col w-full relative font-bebas">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() => {
              toggleButtonActive(button.text);
              button.onClick?.();
            }}
            size="lg"
            radius="none"
            className={`bg-blue-400 text-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[35px] h-[88px] sticky ${
              button.isActive
                ? "bg-blue-100 text-white border-y-2 border-blue-400"
                : "border-y-1 border-white"
            }`}
            style={{ top: `${index * 88}px` }}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar
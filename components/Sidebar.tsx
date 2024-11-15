"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { useButtonContext } from "../context/ButtonContext";

const Sidebar: React.FC = () => {
  const { buttons, toggleButtonActive } = useButtonContext();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonText: string, href?: string, onClick?: () => void) => {
    setActiveButton(buttonText);
    onClick?.();
    if (href) {
      // Handle navigation if href is provided
      window.location.href = href;
    } else {
      // Toggle button active state if no href
      toggleButtonActive(buttonText);
    }
  };
  return (
    <aside className="hidden lg:flex h-auto w-60 bg-blue-400">
      <div className="flex flex-col w-full relative font-bebas">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() =>
              handleButtonClick(button.text, button.href, button.onClick)
            }
            size="lg"
            radius="none"
            className={`bg-blue-400 text-white border-b-3 border-white hover:text-blue-400 hover:bg-white hover:!opacity-100 text-[35px] h-[88px] sticky ${
              activeButton === button.text ? "bg-white text-blue-400" : ""
            }`}
            style={{ top: `${index * 88}px` }}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

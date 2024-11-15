"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ButtonProps {
  isActive: boolean;
  text: string;
  onClick?: () => void;
  href?: string;
}

interface ButtonContextType {
  buttons: ButtonProps[];
  setButtons: React.Dispatch<React.SetStateAction<ButtonProps[]>>;
  toggleButtonActive: (buttonText: string) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [buttons, setButtons] = useState<ButtonProps[]>([]);
  const toggleButtonActive = (buttonText: string) => {
    setButtons((prevButtons) =>
      prevButtons.map(
        (button) =>
          button.text === buttonText
            ? { ...button, isActive: !button.isActive }
            : { ...button, isActive: false }
      )
    );
  };
  return (
    <ButtonContext.Provider value={{ buttons, setButtons, toggleButtonActive }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = (): ButtonContextType => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  
  return context;
};

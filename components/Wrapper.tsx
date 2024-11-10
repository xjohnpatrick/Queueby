import React from "react";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={`flex items-center justify-center h-[800px] lg:h-[900px] w-full bg-blue-100 ${className}`}
    >
      {children}
    </div>
  );
}

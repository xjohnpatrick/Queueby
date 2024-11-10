import React from 'react'

interface ProfilePageProps {
    children?: React.ReactNode;
}

export default function ProfilePage({ children }: ProfilePageProps) {
  return (
    <div className="flex items-center justify-center h-[800px] lg:h-[900px] w-full bg-blue-100">
      {children}
    </div>
  );
}

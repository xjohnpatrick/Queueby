'use client'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { useSidebar } from '@/utils/sidebarUtils'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isSidebarHidden, getSidebarButtons } = useSidebar();

  return (  
    <html lang="en">
      <body
      className="flex flex-col h-screen"
      >
        <div>
          <Navbar />
        </div>
        <div className="flex">
          {!isSidebarHidden() && <Sidebar buttons={getSidebarButtons()} />}
          {children}
        </div> 
        <Footer /> 
      </body>
    </html>
  );
}

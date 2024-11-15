'use client'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { bebasNeue, montserrat } from "@/app/fonts/fonts";

import { useSidebar } from '@/utils/sidebarUtils'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isSidebarHidden, getSidebarButtons } = useSidebar();

  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${montserrat.variable}`}>
          <Navbar />
        <div className="flex">
          {!isSidebarHidden() && <Sidebar buttons={getSidebarButtons()} />}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

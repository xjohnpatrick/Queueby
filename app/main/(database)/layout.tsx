import "@/app/globals.css";
import { bebasNeue, montserrat } from "@/app/fonts/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DatabaseSidebar from "@/components/sidebars/DatabaseSidebar";

export default function DatabaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${montserrat.variable}`}>
        <Navbar />
        <div className="flex">
          <DatabaseSidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

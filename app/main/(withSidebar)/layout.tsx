import { bebasNeue, montserrat } from "@/app/fonts/fonts";
import { ButtonProvider } from "@/context/ButtonContext";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function WithSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ButtonProvider>
      <html lang="en">
        <body className={`${bebasNeue.variable} ${montserrat.variable}`}>
          <Navbar />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ButtonProvider>
  );
}

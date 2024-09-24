import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="flex flex-col h-screen"
      >
        <div>
          <Navbar />
        </div>
        <div className="flex">
          <Sidebar /> 
          {children}
        </div>  
      </body>
    </html>
  );
}

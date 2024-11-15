import "@/app/globals.css";
import { bebasNeue, montserrat } from "@/app/fonts/fonts";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}

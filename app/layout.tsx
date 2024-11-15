import "./globals.css";
import { bebasNeue, montserrat } from "./fonts/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Cmembo App",
    default: "Cmembo App",
  },
};

export default function RootLayout({
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

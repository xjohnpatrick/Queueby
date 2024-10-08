import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Cmembo App',
    default: 'Cmembo App',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

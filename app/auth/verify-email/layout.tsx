import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Verify Email',
  description:
    "Verify Email Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
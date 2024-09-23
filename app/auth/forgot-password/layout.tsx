import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Forgot Password',
  description:
    "Forgot Password Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reset Password',
  description:
    "Reset Password Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
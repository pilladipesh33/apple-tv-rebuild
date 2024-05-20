import type { Metadata } from "next";
import "./globals.css";
import { SFPro } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SFPro.variable}>
      <body className="font-display">{children}</body>
    </html>
  );
}

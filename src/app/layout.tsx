import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Montserrat } from 'next/font/google';
import Navbar from "@/app/components/Navbar";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-montserrat',
    display: 'swap',
});

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
    <html lang="en">
      <body
        className={`${poppins.className} ${montserrat.className} antialiased`}
      >
      <Navbar />
          {children}
      </body>
    </html>
  );
}

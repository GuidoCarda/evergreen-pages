import "./globals.css";
import type { Metadata } from "next";
import { merriweather, openSans } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evergreen Pages",
  description: "Timeless literature connected to nature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${openSans.variable} ${openSans.className} antialiased`}
      >
        <header className="relative h-20 w-full md:flex md:justify-between max-w-screen-xl mx-auto">
          <div className="flex justify-between px-4 items-center h-full">
            <Link href={"/"} className={`font-title text-lg text-primary`}>
              Evergreen
            </Link>
            <button className="h-12 w-12 md:hidden">X</button>
          </div>
          <nav className="absolute invisible flex w-full py-4 top-full flex-col gap-2  px-4 md:top-0 md:relative md:visible md:flex-row md:items-center md:w-auto md:gap-6 ">
            <NavLinks />
          </nav>
        </header>
        {children}
        <footer className="max-w-screen-xl mx-auto">
          <span>Evergreen Pages</span>
        </footer>
      </body>
    </html>
  );
}

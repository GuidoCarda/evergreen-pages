import "./globals.css";
import type { Metadata } from "next";
import { merriweather, openSans } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";
import menuIcon from "../../public/menu.svg";
import Image from "next/image";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Evergreen Pages",
  description: "Timeless literature connected to nature",
};

export default function RootLayout({
  children,
  cart,
}: Readonly<{
  children: React.ReactNode;
  cart: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          `${merriweather.variable} ${openSans.variable} ${openSans.className} antialiased`
        )}
      >
        <header className="relative h-20 w-full md:flex md:justify-between max-w-screen-xl mx-auto">
          <div className="flex justify-between px-4 items-center h-full">
            <Link href={"/"} className={`font-title text-xl text-primary`}>
              Evergreen
            </Link>
            <Link
              href={"/cart"}
              className="h-12 w-12 grid place-content-center md:hidden"
            >
              <Image
                height={20}
                width={20}
                src={menuIcon}
                alt="hamburguer icon"
              />
            </Link>
          </div>
          <nav className="absolute invisible flex w-full py-4 top-full flex-col gap-2  px-4 md:top-0 md:relative md:visible md:flex-row md:items-center md:w-auto md:gap-6 ">
            <NavLinks />
          </nav>
        </header>
        {children}
        {cart}
        <footer className="max-w-screen-xl flex justify-center items-center h-16 mx-auto">
          <span className="font-title">Evergreen Pages</span>
        </footer>
      </body>
    </html>
  );
}

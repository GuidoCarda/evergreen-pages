"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import shoppingCartIcon from "../../../public/shopping-cart.svg";

const links = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "About Us", href: "/about" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          className={clsx(`rounded-md transition-all `, {
            "text-accent ": pathname === link.href,
          })}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
      <Link
        href={"/cart"}
        className="h-12 w-12 rounded-md grid place-content-center"
      >
        <Image
          src={shoppingCartIcon}
          height={20}
          width={20}
          alt="shopping cart icon"
        />
      </Link>
    </>
  );
}

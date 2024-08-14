"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    </>
  );
}

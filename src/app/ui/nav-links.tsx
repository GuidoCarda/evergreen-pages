import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "About Us", href: "/about" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.href} className="py-4" href={link.href}>
          {link.name}
        </Link>
      ))}
    </>
  );
}

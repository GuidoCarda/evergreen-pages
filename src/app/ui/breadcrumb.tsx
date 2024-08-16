import { spawn } from "child_process";
import clsx from "clsx";
import Link from "next/link";

export default function Breadcrumb({
  links,
}: {
  links: {
    name: string;
    href: string;
    isActive: boolean;
  }[];
}) {
  return (
    <div className="space-x-4 pb-10">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(`font-title text-primary text-xl capitalize`, {
              "text-accent": link.isActive,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

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
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex text-xl">
        {links.map((link, index) => {
          return (
            <li key={link.href}>
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  `font-title capitalize`,
                  link.isActive ? "text-accent" : "text-primary"
                )}
              >
                {link.name}
              </Link>
              {index < links.length - 1 ? (
                <span className="mx-3 inline-block">/</span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

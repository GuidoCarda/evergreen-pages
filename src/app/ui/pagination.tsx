"use client";

import { generatePagination } from "@/app/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pages = generatePagination(currentPage, totalPages);

  const createPageUrl = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="py-10 flex gap-1 items-center mx-auto">
      <PaginationArrow
        direction="left"
        href={createPageUrl(currentPage - 1)}
        isDisabled={currentPage === 1}
      />
      {pages.map((page, idx) => (
        <PaginationNumber
          key={`${page}-${idx}`}
          isEllipsis={page === "..."}
          page={page}
          isActive={currentPage === page}
          href={createPageUrl(page)}
        />
      ))}
      <PaginationArrow
        direction="rigth"
        href={createPageUrl(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  href,
  page,
  isActive,
  isEllipsis,
}: {
  href: string;
  isActive: boolean;
  isEllipsis: boolean;
  page: number | string;
}) {
  const classnames = clsx(
    `h-12 w-12 rounded-md border-2 grid place-content-center outline-primary select-none`,
    {
      "bg-primary text-secondary": isActive,
      "focus:bg-primary/15 hover:bg-primary/15": !isActive && !isEllipsis,
      "border-transparent w-4": isEllipsis,
    }
  );

  return isActive || isEllipsis ? (
    <div className={classnames}>{page}</div>
  ) : (
    <Link className={classnames} href={href}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "rigth";
  isDisabled?: boolean;
}) {
  const classnames = clsx(
    `h-12 px-4 flex gap-2 items-center rounded-md border-2 outline-primary`,
    {
      "border-primary/20 text-primary cursor-not-allowed opacity-50":
        isDisabled,
      "flex-row-reverse": direction === "left",
    }
  );

  const label = direction === "left" ? "Previous" : "Next";
  const icon = direction === "left" ? "<" : ">";

  return isDisabled ? (
    <div className={classnames}>
      <span className="hidden md:block">{label}</span>
      <span>{icon}</span>
    </div>
  ) : (
    <Link href={href} className={classnames}>
      <span className="hidden md:block">{label}</span>
      <span>{icon}</span>
    </Link>
  );
}

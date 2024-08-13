import { Book } from "@/app/lib/definitions";
import Link from "next/link";
import { Key } from "react";

export default function FeaturedBook(
  {
    featuredBook,
  }: {
    featuredBook: Book;
  },
  key: Key
) {
  const { isbn, title, author, description } = featuredBook;

  return (
    <li
      key={key}
      className="border-2 border-transparent hover:bg-secondary/20 hover:border-secondary/50 rounded-md  transition-colors"
    >
      <Link
        className="flex gap-6 p-4 focus:outline-secondary/50 rounded-md flex-col md:flex-row md:items-center "
        href={`/catalog/${isbn}`}
      >
        <div className="aspect-[9/14] shrink-0 w-32 self-center md:selft-start rounded-md bg-secondary"></div>
        <div className="space-y-2">
          <div>
            <h2 className="font-title text-accent text-2xl">{title}</h2>
            <span className="text-sm block relative -top-1">{author}</span>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}

import Link from "next/link";
import { Key } from "react";

export default function FeaturedBook({
  key,
  featuredBook,
}: {
  key: Key;
  featuredBook: {
    id: number;
    title: string;
    author: string;
    description: string;
  };
}) {
  const { id, title, author, description } = featuredBook;

  return (
    <li
      key={key}
      className="border-2 border-transparent hover:bg-secondary/20 hover:border-secondary/50 rounded-md p-4 transition-colors"
    >
      <Link
        className="flex gap-6 flex-col md:flex-row md:items-center "
        href={`/catalog/${id}`}
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

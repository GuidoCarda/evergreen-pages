import { Book } from "@/app/lib/definitions";
import Link from "next/link";

export default function BookCard({ book }: { book: Book }) {
  return (
    <li className="group w-full border-2  border-transparent hover:bg-secondary/20 hover:border-secondary/50 rounded-md">
      <Link
        href={`/catalog/${book.isbn}`}
        className="relative px-2 py-8 flex flex-col items-center  h-full "
      >
        <div className="w-28 aspect-[9/12] mb-4 bg-primary rounded-md group-hover:shadow-xl group-hover:-translate-y-1 transition-transform duration-200" />
        <h3 className="text-center text-primary font-title">{book.title}</h3>
        <span className="text-sm">{book.author}</span>
        <span className="block mt-2 text-center  font-title text-accent text-xl">
          ${book.price}
        </span>
        <span className="hidden  capitalize text-sm text-accent absolute bottom-2  group-hover:block ">
          view details
        </span>
      </Link>
    </li>
  );
}

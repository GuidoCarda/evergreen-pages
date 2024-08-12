import { getBooks } from "@/app/lib/data";
import { Book } from "@/app/lib/definitions";
import BookCard from "@/app/ui/book-card";
import Link from "next/link";

export default async function Page() {
  const books: Book[] = await getBooks();
  return (
    <main className="flex flex-col min-h-screen max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-title text-primary mb-10">
        Catalog
      </h1>
      <div className="mb-10">
        <label className="block" htmlFor="query">
          Book Name or Author
        </label>
        <input
          type="text"
          name="query"
          id="query"
          className="w-full h-12 ps-2 border-secondary outline-accent border-2 rounded-md "
        />
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4">
        {books.map((book) => (
          <BookCard key={book.isbn} book={book} />
        ))}
      </ul>
    </main>
  );
}

import FeaturedBook from "@/app/ui/featured-book";
import { promises as fs } from "fs";

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  genre: string;
  description: string;
  coverImage: string;
  price: number;
  featured: boolean;
};

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/placeholder-data.json",
    "utf8"
  );
  const { books } = JSON.parse(file);
  console.log(books);
  return (
    <main className="flex flex-col min-h-screen py-10 items-center max-w-screen-xl px-4 mx-auto">
      <h1 className="text-3xl md:text-4xl font-title text-primary mb-20">
        Current week&apos;s top 5 books
      </h1>
      <section className="max-w-screen-md w-full mx-auto">
        <ul className="space-y-6 ">
          {books
            .filter((book: Book) => book.featured)
            .map((book: Book) => (
              <FeaturedBook key={book.isbn} featuredBook={book} />
            ))}
        </ul>
      </section>
    </main>
  );
}

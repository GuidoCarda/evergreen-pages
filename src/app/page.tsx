import { getFeaturedBooks } from "@/app/lib/data";
import { Book } from "@/app/lib/definitions";
import FeaturedBook from "@/app/ui/featured-book";

export default async function Home() {
  const featuredBooks: Book[] = await getFeaturedBooks();
  return (
    <main className="flex flex-col min-h-screen py-10 items-center max-w-screen-xl px-4 mx-auto">
      <h1 className="text-3xl md:text-4xl font-title text-primary mb-20">
        Current week&apos;s top 5 books
      </h1>
      <section className="max-w-screen-md w-full mx-auto">
        <ul className="space-y-6 ">
          {featuredBooks.map((book) => (
            <FeaturedBook key={book.isbn} featuredBook={book} />
          ))}
        </ul>
      </section>
    </main>
  );
}

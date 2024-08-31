import { getBook, getRecommendedBooks } from "@/app/lib/data";
import BookCard from "@/app/ui/book-card";
import Breadcrumb from "@/app/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { isbn: string } }) {
  const book = await getBook(params.isbn);

  if (!book) {
    notFound();
  }

  const recommendedBooks = await getRecommendedBooks(book);

  return (
    <main className="min-h-screen max-w-screen-xl py-10 md:py-20 px-4 mx-auto">
      <div className="mx-auto md:max-w-screen-md">
        <Breadcrumb
          links={[
            {
              href: "/",
              name: "catalog",
              isActive: false,
            },
            {
              href: `/catalog/${params.isbn}`,
              name: book.title,
              isActive: true,
            },
          ]}
        />
        <section className="md:flex md:items-center  md:gap-10 ">
          <div className="w-1/2 mx-auto md:mx-0 aspect-[9/12] md:max-w-60  mb-10 md:mb-0 rounded-lg  overflow-hidden object-cover  bg-secondary">
            <img src={book.coverImage} alt="book cover image" />
          </div>
          <div className="">
            <span className="inline-block text-sm mb-2  bg-primary text-white w-fit px-2  rounded-md">
              {book.genre}
            </span>
            {book.featured && (
              <span className="inline-block ml-2 text-sm mb-2  bg-accent text-white w-fit px-2 rounded-md">
                Featured
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-title text-primary">
              {book.title}
            </h1>
            <p className="mb-4">{book.author}</p>
            <p className="max-w-[60ch]">{book.description}</p>
            <p className="text-3xl my-4 font-title  text-accent">
              ${book.price}
            </p>
            <div className="w-full mt-6 flex gap-2 ">
              <Link
                href={`/reserve?isbn=${book.isbn}`}
                className="w-full  h-10 px-6 rounded-md bg-accent hover:opacity-90 text-white inline-flex justify-center items-center md:w-fit"
              >
                Add to Reservation
              </Link>
              <button
                aria-label="add to wishlist"
                className="h-10 w-10 shrink-0  rounded-md border-2 grayscale hover:grayscale-0 transition-all duration-200 border-secondary focus:outline-accent "
              >
                ❤️
              </button>
            </div>
          </div>
        </section>

        {Boolean(recommendedBooks.length) && (
          <section className="py-10">
            <h2 className="font-title text-primary mb-6 text-2xl">
              You May Also Like
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4">
              {recommendedBooks.map((book) => (
                <BookCard key={book.isbn} book={book} />
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import ReservationForm from "../components/reservation-form";
import { getBook } from "../lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: { isbn?: string; reserveId?: string };
}) {
  const isbn = searchParams?.isbn;
  const reserveId = searchParams?.reserveId;

  if (!isbn && !reserveId) {
    //Set a more detailed message
    return notFound();
  }

  const book = await getBook(isbn ?? "");

  if (reserveId) {
    return (
      <main className="min-h-[calc(100vh_-_10rem)] max-w-screen-sm mx-auto py-10 px-4">
        <h1 className="text-2xl font-title text-primary mb-4">
          Books Successfully reserved
        </h1>
        <h2 className="text-xl">Book {isbn}</h2>
        <h2 className="text-xl">Book {book?.title}</h2>
        <h2 className="text-xl">Book {book?.author}</h2>
        <h2 className="text-xl">ReserveId {reserveId}</h2>
        <Link
          href={"/catalog"}
          className="w-full mt-10 h-10 px-6 rounded-md bg-accent hover:opacity-90 text-white inline-flex justify-center items-center md:w-fit"
        >
          Catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh_-_10rem)] max-w-screen-sm mx-auto py-10 px-4">
      <h1 className="text-4xl font-title text-primary ">Book Reservation</h1>
      <p className="mb-10 mt-2 max-w-[50ch]">
        Complete the following fields to book the reservation of your desired
        books
      </p>
      <ReservationForm />
    </main>
  );
}

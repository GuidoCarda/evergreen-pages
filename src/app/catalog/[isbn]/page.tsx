import { getBook } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { isbn: string } }) {
  const book = await getBook(params.isbn);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen max-w-screen-xl px-4 mx-auto">
      <h1 className="text-3xl md:text-4xl font-title text-primary mb-20">
        Book {params.isbn} page
      </h1>
    </main>
  );
}

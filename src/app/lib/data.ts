import { Book } from "@/app/lib/definitions";
import { promises as fs } from "fs";

export async function getBooks() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/placeholder-data.json",
    "utf8"
  );
  const { books }: { books: Book[] } = JSON.parse(file);

  return books || [];
}

export async function getFeaturedBooks() {
  const featured = await getBooks();
  return featured.filter((book) => book.featured);
}

export async function getBook(isbn: string) {
  const books = await getBooks();
  return books.find((book) => book.isbn === isbn);
}

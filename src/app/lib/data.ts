import { Book } from "@/app/lib/definitions";
import { promises as fs } from "fs";

const ITEMS_PER_PAGE = 10;
const FEATURED_ITEMS = 5;

export async function getBooks() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/placeholder-data.json",
    "utf8"
  );
  const { books }: { books: Book[] } = JSON.parse(file);

  return books || [];
}

export async function getFilteredBooks(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const books = await getBooks();
  return books.slice(offset, offset + ITEMS_PER_PAGE);
}

export async function getFeaturedBooks() {
  const featured = await getBooks();
  return featured.filter((book) => book.featured).slice(0, FEATURED_ITEMS);
}

export async function getBook(isbn: string) {
  const books = await getBooks();
  return books.find((book) => book.isbn === isbn);
}

// For know let's simulate an sql query by using .length
export async function getBooksPages() {
  const books = await getBooks();
  return Math.ceil(books.length / ITEMS_PER_PAGE);
}

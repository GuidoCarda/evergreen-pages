import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[calc(100vh_-_10rem)] flex items-center justify-center gap-2 text-center flex-col">
      <h2 className="font-title text-2xl md:text-4xl text-primary">
        Not found
      </h2>
      <p>Could not find requested resourse</p>
      <Link
        href={"/"}
        className="h-10 mt-6 px-4 w-fit rounded-md bg-accent text-white inline-flex items-center justify-center"
      >
        Return to home
      </Link>
    </main>
  );
}

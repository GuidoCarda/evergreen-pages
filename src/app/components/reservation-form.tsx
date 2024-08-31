"use client";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { FormEvent } from "react";

export default function ReservationForm() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const isbn = searchParams.get("isbn") ?? "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const res = await fetch("/api", {
      body: formData,
      method: "POST",
    });
    const reserveId = await res.json();
    if (reserveId) {
      router.replace(`/reserve?isbn=${isbn}&reserveId=${reserveId}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="group">
        <label
          className="text-gray-500 group-focus-within:text-primary transition-all duration-200"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="h-10 border-2  focus:outline-accent px-2 rounded-md w-full border-gray-200"
          type="text"
          name="name"
          id="name"
        />
      </div>

      <div className="group">
        <label
          className="text-gray-500 group-focus-within:text-primary transition-all duration-200"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="h-10 border-2  focus:outline-accent px-2 rounded-md w-full border-gray-200"
          type="email"
          name="email"
          id="email"
        />
      </div>

      <div className="group">
        <label
          className="text-gray-500 group-focus-within:text-primary  transition-all duration-200"
          htmlFor="pickup-date"
        >
          Pick up date
        </label>
        <input
          className="h-10 border-2 focus:outline-accent px-2 rounded-md w-full border-gray-200"
          type="date"
          name="pickup-date"
          id="pickup-date"
          min={new Date().toDateString()}
        />
      </div>
      <div className="ml-auto mt-4 space-x-2">
        <Link
          href="/catalog"
          className="w-max h-10 px-6 rounded-md text-primary border-2 border-secondary/25 bg-secondary/20 hover:opacity-90 inline-flex justify-center items-center "
        >
          Cancel
        </Link>
        <button className="w-max h-10 px-6 rounded-md bg-accent hover:opacity-90 text-white inline-flex justify-center items-center ">
          Reserve
        </button>
      </div>
    </form>
  );
}

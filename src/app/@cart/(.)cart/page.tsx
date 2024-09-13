"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  const router = useRouter();
  return (
    <div className="h-full w-full no-doc-scroll bg-white/50 backdrop-blur-[2px] absolute inset-0">
      <div className="fixed top-0 bottom-0 right-0 flex flex-col py-4 pl-4 md:border-l-[1px] border-l-primary bg-white z-10 w-full md:max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-title text-primary">My Cart</h2>
          <button
            onClick={() => router.back()}
            className="h-12 w-12 rounded-md border-2 border-primary text-primary"
          >
            x
          </button>
        </div>

        <ul className="space-y-6">
          <li className="flex gap-2 ">
            <img
              src="#"
              className="w-14 shrink-0 block rounded-md bg-black aspect-[6/9]"
              alt=""
            />
            <div className="w-full flex justify-between">
              <div>
                <h3 className="text-xl font-title text-primary">
                  The Wisper of Leaves
                </h3>
                <p className="text-sm text-accent relative -top-1">
                  Elena Blackwood
                </p>
              </div>
              <div className="flex items-end justify-between flex-col">
                <p className="font-title text-xl text-accent">$23.43</p>
                <button className="h-12 w-12 rounded-md border-[1px] border-primary">
                  -
                </button>
              </div>
            </div>
          </li>
          <li className="flex gap-2">
            <img
              src="#"
              className="w-14 shrink-0 block rounded-md bg-black aspect-[6/9]"
              alt=""
            />
            <div className="w-full flex justify-between">
              <div>
                <h3 className="text-xl font-title text-primary">
                  The Wisper of Leaves
                </h3>
                <p className="text-sm text-accent relative -top-1">
                  Elena Blackwood
                </p>
              </div>
              <div className="flex items-end justify-between flex-col">
                <p className="font-title text-xl text-accent">$23.43</p>
                <button className="h-10 w-10 rounded-md border-[1px] border-primary">
                  -
                </button>
              </div>
            </div>
          </li>
        </ul>

        <div className="flex items-center mt-auto justify-between">
          <p className="text-xl font-title">Total:</p>
          <p className="text-2xl  text-accent font-title">$342</p>
        </div>
        <Link
          href={"/reserve"}
          className="h-12 w-full grid place-content-center bg-accent text-white rounded-md mt-6"
        >
          Proceed to reseve
        </Link>
      </div>
    </div>
  );
}

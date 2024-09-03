import Breadcrumb from "@/app/ui/breadcrumb";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  const links = [
    { name: "home", href: "/", isActive: false },
    { name: "cart", href: "/cart", isActive: true },
  ];

  return (
    <main className="min-h-screen max-w-screen-xl py-10 md:py-20 px-4 mx-auto">
      <Breadcrumb links={links} />
      <h1 className="text-2xl font-title text-primary mb-4">
        Your reservation list
      </h1>

      <ul className="space-y-4 mb-6">
        {Array.from({ length: 5 }, (_, i) => i).map((item) => {
          return (
            <li key={item} className="group flex gap-2">
              <div className="w-16 shrink-0 aspect-[6/8] overflow-hidden rounded-md">
                <img
                  className="w-full"
                  src="https://m.media-amazon.com/images/I/51Hd9zBZJ9L.jpg"
                  alt="Book image"
                />
              </div>

              <div className="flex items-center gap-6 w-full">
                <div>
                  <h2 className="font-title text-primary text-xl">Title</h2>
                  <p className="relative -top-1 text-sm">Author</p>
                </div>
                <button className="h-10 px-4  ml-auto text-accent bg-accent/20 rounded-md">
                  remove
                </button>
                <p className="font-title text-accent text-xl">$34.30</p>
              </div>
            </li>
          );
        })}
      </ul>

      <section className="my-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-title text-primary text-xl">Total</h3>
          <p className="font-title text-accent text-xl">$34.30</p>
        </div>
        <button className="ml-auto w-max h-10 px-6 rounded-md bg-accent hover:opacity-90 text-white inline-flex justify-center items-center ">
          Complete Reserve
        </button>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import IMG1 from "@/public/assets/asset-1.jpg";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col bg-white">
      <div className=" h-64 w-full bg-img-not-found"></div>

      <div className="flex justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can&apos;t find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded bg-primaryColor px-5 py-3 text-sm font-medium text-white hover:bg-primaryColor focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}

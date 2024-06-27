"use client";

import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <main className="flex h-screen flex-col bg-white">
      <div className=" h-64 w-full bg-img-not-found"></div>

      <div className="flex justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            An error occured
          </h1>

          <p className="mt-4 text-gray-500">
            Click on the button to reload the page
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 inline-block rounded bg-primaryColor px-5 py-3 text-sm font-medium text-white hover:bg-primaryColor focus:outline-none focus:ring"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}

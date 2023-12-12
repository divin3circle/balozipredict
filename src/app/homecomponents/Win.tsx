import Link from "next/link";
import React from "react";

export default function Win() {
  return (
    <section className="bg-white">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            How to Win with Balozi
          </h2>

          <p className=" text-xl text-gray-500 sm:mt-4 sm:block">
            Balozi Predictions comes in two flavours, Premium⭐️ and free
            odds💯. Premium odds are availbale in three falvours as well daily
            2+ odds, monthly subsriptions and the Jackpot grandprize. For more
            about pricing{" "}
            <Link
              className="text-blue-500 underline font-semibold hover:text-blue-400"
              href="/pricing"
            >
              Click Here
            </Link>
            . All of our odds are well analyzed and highly probable to win,
            however premium odds have 99-100% chance of success.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium">
                {" "}
                Sign Up for Newsletter{" "}
              </span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

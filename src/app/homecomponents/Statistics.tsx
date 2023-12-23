import React from "react";

export default function Statistics() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-shark sm:text-4xl">
            Trusted by punters nation-wide
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Join the nation&apos;s savvy punters who rely on Balozi Predictions
            for trusted, reliable insights into soccer matches. Our track record
            speaks volumes, empowering punters nationwide to make informed
            choices and amplify their winning strategies. Become part of the
            trusted community today!
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                2023 Bets
              </dt>

              <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                178,000
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Wins
              </dt>

              <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                169,000
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Win Percentage
              </dt>

              <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                94%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

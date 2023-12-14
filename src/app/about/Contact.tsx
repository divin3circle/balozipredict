import React from "react";

export default function Contact() {
  return (
    <section className="text-shark">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Have any unanswered questions? Send us an email and we will get
              back to as soon as possible.We&rsquo;re always ready to help.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600">
                {" "}
                +254 796 314 164{" "}
              </a>

              <address className="mt-2 not-italic">Balozi Predictions</address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">About Balozi Premium</span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Payment methods</span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option3"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Other</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

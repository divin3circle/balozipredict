import React from "react";
import Link from "next/link";

export default function Methods() {
  return (
    <section className="overflow-hidden max-w-[1440px] m-auto">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex-col justify-center">
        <div className="mx-auto max-w-4xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-shark md:text-3xl">
            Expert-Driven Match Analysis
          </h2>

          <p className="text-lg md:text-xl text-gray-500 md:mt-4 md:block">
            At Balozi Predictions, our winning edge is not artificial
            intelligence or machine learning, it is our team of seasoned soccer
            experts. Our dedicated analysts leverage their in-depth knowledge,
            experience, and keen insights into the game to meticulously study
            matches. With a keen eye for detail, they dissect team dynamics,
            player performance, historical trends, and more to craft precise
            odds and predictions. Our methodology relies on human expertise,
            ensuring accurate and reliable match analysis that is rooted in the
            nuances and intricacies of the game itself. More about us can be
            found in our blogs sections, see the link below.
          </p>
        </div>
        <Link href="/blogs" className="flex justify-center items-center my-8">
          <button className="hover:bg-blue-500 text-gray-500 py-2 px-8 md:text-2xl bg-transparent shadow-lg shadow-blue-500/30 border-blue-500 hover:scale-105 hover:text-white border-[1px] rounded-lg ease-in duration-150">
            Read Today&rsquo;s blogs
          </button>
        </Link>
      </div>
    </section>
  );
}

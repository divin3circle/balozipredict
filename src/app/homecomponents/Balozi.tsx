import React from "react";
import Image from "next/image";
import about from "../../../public/Mo.jpeg";

export default function Balozi() {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2">
      <div className="md:flex justify-center items-center hidden">
        <Image src={about} alt="balozipredict" height={400} width={400} />
      </div>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-shark md:text-3xl">
            Who are we?
          </h2>

          <p className="text-lg md:text-xl text-gray-500 md:mt-4 md:block">
            At Balozi Predictions, we love soccer as much as you do! Our team of
            experts studies matches closely to give you tips that could change
            your life. We&apos;re all about making betting simple and enjoyable.
            Join us for accurate predictions and a friendly community that
            shares your passion for the game!
          </p>
        </div>
      </div>
      <div className="md:hidden justify-center items-center">
        <Image src={about} alt="balozipredict" height={300} width={300} />
      </div>
    </section>
  );
}

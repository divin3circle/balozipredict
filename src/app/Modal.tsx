import React from "react";
import Image from "next/image";
import balozi from "../../public/balozi4.jpeg";

function Modal() {
  return (
    <div>
      <section
        className="overflow-hidden rounded-lg text-shark
       shadow-2xl md:grid md:grid-cols-3 my-16"
      >
        <Image
          alt="1XBET"
          src={balozi}
          className="h-32 w-full object-contain md:object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Stake with the Punters
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              {" "}
              Use this promocode{" "}
            </span>

            <span className="mt-2 block text-sm">
              to get first-time bet bonus of upto 50%
            </span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href="https://bit.ly/3XxVHgv"
          >
            Get Bonus using promocode{" "}
            <span className="text-red-600 font-bold">BALOZI</span>
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until: FOREVER!!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Modal;

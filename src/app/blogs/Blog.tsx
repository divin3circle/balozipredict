import React from "react";
import Image, { StaticImageData } from "next/image";
import balozi from "../../../public/balozi6.jpeg";
import MainNavBar from "../MainNavBar";

type BlogProps = {
  title: string;
  img: StaticImageData;
  desc: string;
};

export default function Blog({ title, img, desc }: BlogProps) {
  return (
    <div>
      <h1 className="md:text-3xl text-2xl font-bold text-shark p-4">
        More Free Odds Coming Soon🔜.
      </h1>
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-12-23"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2023</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Dec 10</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <Image
            alt="Guitar"
            src={img}
            className="aspect-square h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">{title}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {desc}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

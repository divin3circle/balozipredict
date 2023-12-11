"use client";
import React, { useState } from "react";
import Image from "next/image";
import balozi1 from "../../../public/balozi1.jpeg";
import balozi2 from "../../../public/balozi2.jpeg";
import balozi3 from "../../../public/balozi3.jpeg";
import balozi4 from "../../../public/balozi4.jpeg";
import balozi5 from "../../../public/balozi5.jpeg";
import balozi6 from "../../../public/balozi6.jpeg";
import balozi7 from "../../../public/balozi7.jpeg";
import balozi8 from "../../../public/balozi8.jpeg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Corousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const slides = [
    {
      id: 1,
      src: balozi1,
    },
    {
      id: 2,
      src: balozi2,
    },
    {
      id: 3,
      src: balozi3,
    },
    { id: 4, src: balozi4 },
    { id: 5, src: balozi5 },
    { id: 6, src: balozi6 },
    { id: 7, src: balozi7 },
    { id: 8, src: balozi8 },
  ];
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex ease-in duration-500 translate-x-[-${current * 100}%]`}
      >
        {slides.map((slide) => {
          return (
            <div key={slide.id} className=" my-8">
              <Image
                className="min-h-[300px] p-2  min-w-[300px] object-fit rounded-xl"
                src={slide.src}
                alt="balozipredict"
                height={700}
                width={700}
              />
            </div>
          );
        })}
      </div>
      <div className="flex absolute top-0 h-full w-full justify-between items-center text-white px-10 text-xl">
        <button onClick={prevSlide}>
          <FaArrowAltCircleLeft size={44} />
        </button>
        <button onClick={nextSlide}>
          <FaArrowAltCircleRight size={44} />
        </button>
      </div>
    </div>
  );
}

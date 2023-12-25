import React from "react";
import Link from "next/link";
import Image from "next/image";
import homepagePNG from "../../../public/ronaldo.jpeg";

export default function Hero() {
  return (
    <div className="md:flex justify-between">
      <div>
        {/* hero */}
        <div className="bp:mt-24 mt-10">
          <h1 className="md:text-3xl text-2xl font-bold text-shark p-4">
            The KickOff to Victory
          </h1>
          <p className="md:text-xl text-lg text-gray-500 p-4 leading-relaxed max-w-[640px] mb-4">
            Welcome to Balozipredictions, where precision meets passion! Elevate
            your game with our expert insights and accurate analysis. Join us
            today to unlock winning strategies and make every match count
            towards your success story.
          </p>
        </div>
        <Link
          href="/pricing"
          className="flex justify-center items-center my-4 "
        >
          <button className="hover:bg-blue-500 text-gray-500 font-bold py-4 md:px-8 px-2 md:text-2xl bg-transparent shadow-lg shadow-blue-500/30 border-blue-500 hover:scale-105 hover:text-white border-[1px] rounded-lg ease-in duration-150">
            Get predictions Today!
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image src={homepagePNG} alt="balozi" height={500} width={500} />
      </div>
    </div>
  );
}

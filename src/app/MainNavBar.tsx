"use client";
import Link from "next/link";
import React, { useState } from "react";
import balozi from "../../public/balozi.svg";
import Image from "next/image";
import MobileNavBar from "./MobileNavBar";

export default function MainNavBar() {
  // const [toggleNavBar, setToggleNavBar] = useState<boolean>(false);

  return (
    <>
      <div className="hidden bp:flex justify-between font-bold text-xl p-2 md:p-1 m-4">
        {/* logo */}
        <Link href="/">
          <div
            className="p-3 text-blue-500 font-bold text-2xl cursor-pointer flex gap-1 justify-center items-center
      "
          >
            <h1>balozipredict.com</h1>
            <Image src={balozi} alt="balozisvg" height={40} width={40} />
          </div>
        </Link>
        {/* navbar, refactor mobile one */}
        <ul className="flex justify-between items-center font-semibold md:gap-3 gap-4 text-shark ">
          <Link
            href="/"
            className="border-b-blue-500 hover:border-b-[3px] p-3 rounded-[0.15rem] ease-in duration-200 hover:text-blue-500"
          >
            <li>home</li>
          </Link>
          <Link
            href="/pricing"
            className="border-b-blue-500 hover:border-b-[3px] p-3 rounded-[0.15rem] ease-in duration-200 hover:text-blue-500"
          >
            <li>pricing</li>
          </Link>
          <Link
            href="/about"
            className="border-b-blue-500 hover:border-b-[3px] p-3 rounded-[0.15rem] ease-in duration-200 hover:text-blue-500"
          >
            <li>about us</li>
          </Link>
          <Link
            href="/blogs"
            className="border-b-blue-500 hover:border-b-[3px] p-3 rounded-[0.15rem] ease-in duration-200 hover:text-blue-500"
          >
            <li>blogs</li>
          </Link>
        </ul>

        <div>
          <Link
            href="/pricing"
            className="p-3 flex items-center justify-center"
          >
            <button className="py-2 px-4 bg-transparent border-[1px] hover:shadow-xl shadow-blue-500 border-blue-500 hover:bg-blue-500 ease-in duration-150 hover:scale-105 text-black hover:text-white rounded-lg">
              get started
            </button>
          </Link>
        </div>
      </div>
      <MobileNavBar />
    </>
  );
}

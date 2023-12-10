import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import balozi from "../../../public/balozi.svg";
import Image from "next/image";

export default function Mobile() {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden backdrop-blur-xl">
      <div className="flex justify-between items-center m-4 px-2">
        <Link href="/">
          <div
            className="p- text-blue-500 font-bold text-4xl cursor-pointer flex gap-1 justify-center items-center
        "
          >
            <h1>balozipredict.com</h1>
            <Image src={balozi} alt="balozisvg" height={40} width={40} />
          </div>
        </Link>
        <div className="cursor-pointer">
          <IoClose className="hover:text-blue-500" size={38} />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <ul className="flex-col justify-between items-center font-semibold bp:gap-3 gap-4 text-4xl  ">
          <Link href="/" className="ease-in duration-75 hover:text-blue-500">
            <li>home</li>
          </Link>
          <Link
            href="/pricing"
            className="ease-in duration-75 hover:text-blue-500"
          >
            <li>pricing</li>
          </Link>
          <Link
            href="/about"
            className="ease-in duration-75 hover:text-blue-500"
          >
            <li>about us</li>
          </Link>
          <Link
            href="/blogs"
            className="ease-in duration-75 hover:text-blue-500"
          >
            <li>blogs</li>
          </Link>
        </ul>
        d
      </div>
    </div>
  );
}

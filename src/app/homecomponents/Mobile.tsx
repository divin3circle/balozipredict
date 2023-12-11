import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import balozi from "../../../public/balozi.svg";
import Image from "next/image";

type MobileProps = {
  toggleNav: boolean;
  setToggleNav: (state: boolean) => void;
};

export default function Mobile({ toggleNav, setToggleNav }: MobileProps) {
  return (
    <div
      className={`${
        !toggleNav ? "hidden" : ""
      } fixed inset-0 z-50 overflow-hidden backdrop-blur-xl`}
    >
      <div className="flex justify-between items-center m-4 px-2">
        <Link href="/">
          <div
            className="text-blue-500 font-bold text-3xl cursor-pointer flex gap-1 justify-center items-center
        "
          >
            <h1>balozipredict.com</h1>
            <Image src={balozi} alt="balozisvg" height={40} width={40} />
          </div>
        </Link>
        <div
          className="cursor-pointer text-shark"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <IoClose className="hover:text-blue-500" size={38} />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <ul className="flex-col justify-between items-center font-semibold bp:gap-3 gap-4 text-4xl text-shark ">
          <Link
            href="/"
            className="p-3 rounded-[0.15rem] ease-in duration-200 hover:text-blue-500"
          >
            <li>home</li>
          </Link>
          <Link
            href="/pricing"
            className="p-3 ease-in duration-200 hover:text-blue-500"
          >
            <li>pricing</li>
          </Link>
          <Link
            href="/about"
            className="p-3 ease-in duration-200 hover:text-blue-500"
          >
            <li>about us</li>
          </Link>
          <Link
            href="/blogs"
            className="p-3 ease-in duration-200 hover:text-blue-500"
          >
            <li>blogs</li>
          </Link>
        </ul>
        d
      </div>
    </div>
  );
}

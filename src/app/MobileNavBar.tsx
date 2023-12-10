import React from "react";
import Link from "next/link";
import balozi from "../../public/balozi.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Mobile from "./homecomponents/Mobile";

export default function MobileNavBar() {
  return (
    <div className="bp:hidden flex justify-between items-center m-4 px-4">
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
        <RxHamburgerMenu size={38} />
      </div>
      <Mobile />
    </div>
  );
}

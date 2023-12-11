"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import balozi from "../../public/balozi.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Mobile from "./homecomponents/Mobile";
import { useRouter } from "next/router";

export default function MobileNavBar() {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  //   const router = useRouter();
  //   useEffect(() => {
  //     const handleRouteChange = () => {
  //       // Close the sidebar here (You can modify this based on your sidebar's closing logic)
  //       console.log("Sidebar closed"); // Example: Replace this with your sidebar closing logic
  //     };

  //     router.events.on("routeChangeComplete", handleRouteChange);

  //     return () => {
  //       router.events.off("routeChangeComplete", handleRouteChange);
  //     };
  //   }, [router.events]);
  return (
    <div className="bp:hidden flex justify-between items-center mt-2 px-4">
      <Link href="/">
        <div
          className="p- text-blue-500 font-bold text-3xl cursor-pointer flex gap-1 justify-center items-center
        "
        >
          <h1>balozipredict.com</h1>
          <Image src={balozi} alt="balozisvg" height={40} width={40} />
        </div>
      </Link>
      <div className="cursor-pointer" onClick={() => setToggleNav(!toggleNav)}>
        <RxHamburgerMenu size={38} />
      </div>
      <Mobile toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </div>
  );
}

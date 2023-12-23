"use client";
import React, { useEffect, useState } from "react";
import s1 from "../../../public/madrid.jpeg";
import s3 from "../../../public/man.jpeg";
import s2 from "../../../public/barca.jpeg";
import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

export default function PricingHeader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [s1, s2, s3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="h-screen relative ease-in-out duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex].src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 z-10">
          Are you ready to win?
        </h1>
        <p>Follow our Socials below</p>
        <div className="flex justify-between gap-2">
          {/* socials */}
          <div className="hover:text-blue-500 cursor-pointer ease-in duration-200 p-2">
            <Link href="https://x.com/balozipredict?t=J1rcCZNWsx2p2PiQvX0ZTQ&s=09">
              <FaSquareXTwitter size={44} />
            </Link>
          </div>{" "}
          {/* twtter */}
          <div className="hover:text-blue-500 cursor-pointer ease-in duration-200 p-2">
            <Link href="https://t.me/BALOZIPREDICTION">
              <FaTelegram size={44} />
            </Link>
          </div>{" "}
          {/* telegram */}
          <div className="hover:text-blue-500 cursor-pointer ease-in duration-200 p-2">
            <Link href="https://www.facebook.com/profile.php?id=100070421967199">
              <FaFacebookSquare size={44} />
            </Link>
          </div>{" "}
          {/* facebook */}
          <div className="hover:text-blue-500 cursor-pointer ease-in duration-200 p-2">
            <Link href="https://www.facebook.com/profile.php?id=100070421967199">
              <FaInstagramSquare size={44} />
            </Link>
          </div>{" "}
          {/* instagram */}p
        </div>
        <Link href="/blogs" className="flex justify-center items-center my-8">
          <button className="hover:bg-blue-500 text-gray-100 py-2 px-8 text-xl md:text-3xl bg-transparent shadow-lg shadow-blue-500/30 border-blue-500 hover:scale-105 hover:text-white border-[1px] rounded-lg ease-in duration-150">
            More Free Odds
          </button>
        </Link>
      </div>
    </div>
  );
}

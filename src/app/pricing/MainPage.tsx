"use client";
import React, { useState } from "react";
import PricingHeader from "./PricingHeader";
import Prices from "./Prices";
import Odds from "./Odds";
import FAQ from "./FAQ";
import YOdds from "./YOdds";

export default function MainPage() {
  const [today, setToday] = useState(true);
  const [yesterday, setYesterday] = useState(false);

  const handleToday = () => {
    setToday(!today);
    setYesterday(!yesterday);
  };
  const handleYesterday = () => {
    setToday(!today);
    setYesterday(!yesterday);
  };
  return (
    <>
      <div className="max-w-6xl m-auto">
        <Prices />
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div
            className={`flex items-center justify-center p-4 cursor-pointer`}
          >
            <button
              onClick={handleYesterday}
              className={`w-full text-shark border-2 border-blue-500 ${
                yesterday ? " bg-blue-500 text-white" : ""
              } py-4 rounded-md font-bold `}
            >
              Yesterday
            </button>
          </div>
          <div
            className={`flex items-center justify-center p-4 cursor-pointer`}
          >
            <button
              onClick={handleToday}
              className={`w-full text-shark bg-blue-500 border-2 border-blue-500 ${
                today ? "bg-blue-500 text-white" : "bg-white"
              }  py-4 rounded-md font-bold `}
            >
              Today
            </button>
          </div>
        </div>
        {today ? <Odds /> : <YOdds />}
        <FAQ />
      </div>
      <PricingHeader />
    </>
  );
}

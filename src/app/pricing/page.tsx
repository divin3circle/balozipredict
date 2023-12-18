import Link from "next/link";
import React from "react";
import PricingHeader from "./PricingHeader";
import Prices from "./Prices";
import Odds from "./Odds";

export default function page() {
  return (
    <>
      <PricingHeader />
      <div className="max-w-6xl m-auto">
        <Prices />
        <Odds />
      </div>
    </>
  );
}

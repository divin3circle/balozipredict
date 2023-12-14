import Link from "next/link";
import React from "react";
import PricingHeader from "./PricingHeader";
import Prices from "./Prices";

export default function page() {
  return (
    <>
      <PricingHeader />
      <div className="max-w-6xl m-auto">
        <Prices />
      </div>
    </>
  );
}

import React from "react";
import Odds from "../homecomponents/Odds";
import Corousel from "./Corousel";

export default function page() {
  return (
    <div>
      <div className="w-[60%] m-auto">
        <Corousel />
      </div>
      <Odds />
    </div>
  );
}

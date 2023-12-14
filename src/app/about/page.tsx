import React from "react";
import Odds from "../homecomponents/Odds";
import Corousel from "./Corousel";
import Win from "../homecomponents/Win";
import Contact from "./Contact";
import Methods from "./Methods";
import Patners from "./Patners";

export default function page() {
  return (
    <div>
      <div className="w-[60%] m-auto">
        <Corousel />
      </div>
      <Odds />
      <Methods />
      <Patners />
      <Contact />
      <Win />
    </div>
  );
}

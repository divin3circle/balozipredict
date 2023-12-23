import { Stats } from "fs";
import Balozi from "./homecomponents/Balozi";
import Hero from "./homecomponents/Hero";
import Testimonials from "./homecomponents/Testimonials";
import Statistics from "./homecomponents/Statistics";
import MainNavBar from "./MainNavBar";

export default function Home() {
  return (
    <section className=" max-w-[1280px] mx-auto text-shark">
      <Hero />
      <Balozi />
      <Statistics />
      <Testimonials />
    </section>
  );
}

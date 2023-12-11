import React from "react";
import Image from "next/image";
import about from "../../../public/coach.jpeg";

export default function Odds() {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2">
      <div className="md:flex m-auto justify-center items-center hidden">
        <Image src={about} alt="balozipredict" height={400} width={400} />
      </div>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-shark md:text-3xl">
            About Premimum Balozi Predictions
          </h2>

          <p className="text-lg md:text-xl text-gray-500 md:mt-4 md:block">
            We are a team of football enthusiasts with a passion for the game.
            We have been in the game for years, and we are here to provide you
            with the best predictions to help you win big. Our 2+ odds
            predictions are based on a thorough analysis of the teams
            performance, the players form, and the head-to-head statistics. win
            big. Our predictions are based on a thorough analysis of the teams
            performance, the players form, and the head-to-head statistics. We
            also consider the teams motivation and the weather conditions. By
            offering high quality predictions, we assure our customers of
            bagging big wins daily.
          </p>
        </div>
      </div>
      <div className="md:hidden justify-center items-center">
        <Image src={about} alt="balozipredict" height={300} width={300} />
      </div>
    </section>
  );
}

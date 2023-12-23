import React from "react";
import Blog from "./Blog";
import balozi1 from "../../../public/balozi1.jpeg";
import balozi2 from "../../../public/balozi2.jpeg";
import balozi3 from "../../../public/balozi3.jpeg";
import balozi4 from "../../../public/balozi4.jpeg";
import balozi5 from "../../../public/balozi5.jpeg";
import balozi6 from "../../../public/balozi6.jpeg";
import MainNavBar from "../MainNavBar";

export default function page() {
  const blogs = [
    {
      id: 1,
      title: "How Klopps Tactics failed against United",
      desc: "Sunday's clash saw ETH's team go head to head with bitter rivals Liverpool at Anfield. Liverpool lokked to got top of the table with what was deemed as an easy fixture for the reds.",
      img: balozi6,
    },
    {
      id: 2,
      title: "Why winning bankers with Balozi premium is easier than you think",
      desc: "Over the past few year it has been very diffucult for punters to bring home huge winning when staking on bankers, however with Balozi premium the narrative is changing.",
      img: balozi1,
    },
    {
      id: 11,
      title: "Best leagues to bet BTTS",
      desc: "Here are the top most leagues with higg scoring fixuters every game week.",
      img: balozi3,
    },
    {
      id: 6,
      title: "How to get paid by staking bets",
      desc: "During this hard economics times it is very difficult to get a job that pays you consistently even when you loose your bets.",
      img: balozi4,
    },
    {
      id: 3,
      title: "Why winning bankers is easier than you think",
      desc: "Over the past few year it has been very diffucult for punters to bring home huge winning when staking on bankers, however with Balozi premium the narrative is changing.",
      img: balozi5,
    },
    {
      id: 45,
      title: "Top 5 betting sites in Kenya",
      desc: "1XBet is by far one of the best betting sites available in Kenya and East Africa, however there are a number of sites that share the same love for the game available in country as well. Here are the best 5",
      img: balozi5,
    },
    {
      id: 445,
      title: "Why ETH proved haters wrong at Anfield",
      desc: "Defensive resilience: United put in a disciplined and organized defensive performance, keeping Liverpool at bay for much of the game. This was a significant improvement from their previous form, particularly against top teams.",
      img: balozi2,
    },
    {
      id: 415,
      title: "How Pochettino is ruining Chelsea",
      desc: "Though losses have been prominent, Chelsea has shown positive signs in recent games. A four-game unbeaten run before the Christmas schedule break indicated progress.",
      img: balozi1,
    },
    {
      id: 495,
      title: "Get huge bonuses by betting through this sites",
      desc: "1XBet is by far one of the best betting sites available in Kenya and East Africa, however there are a number of sites that share the same love for the game available in country as well. Here are the best 5",
      img: balozi5,
    },
  ];
  return (
    <>
      {/* <MainNavBar /> */}
      <div className=" max-w-4xl mx-auto">
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <Blog title={blog.title} img={blog.img} desc={blog.desc} />
            </div>
          );
        })}
      </div>
    </>
  );
}

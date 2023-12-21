import React, { use, useEffect } from "react";
import Table from "./Table";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function Odds() {
  const games = [
    {
      id: 1,
      league: "ENG",
      match: "Liverpool vs Manchester United",
      time: "19:30",
      bet: "X2",
    },
    {
      id: 2,
      league: "ENG",
      match: "Brentford vs Aston Villa",
      time: "18:00",
      bet: "2",
    },
    {
      id: 3,
      league: "ESP",
      match: "Real Madrid vs Villareal",
      time: "23:00",
      bet: "X2",
    },
    {
      id: 4,
      league: "FRA",
      match: "Lille vs PSG",
      time: "22:45",
      bet: "BTTS",
    },
    {
      id: 5,
      league: "ENG",
      match: "West Ham vs Wolves",
      time: "17:00",
      bet: "1",
    },
    {
      id: 6,
      league: "ENG",
      match: "West Brom vs Stoke City",
      time: "15:00",
      bet: "X",
    },
    {
      id: 7,
      league: "FRA",
      match: "Toulouse vs Rennes",
      time: "17:00",
      bet: "U3.5",
    },
    {
      id: 8,
      league: "ITA",
      match: "Lazio vs Inter Millan",
      time: "22:45",
      bet: "2 & U3.5",
    },
  ];
  const [bets, setBets] = React.useState([]);
  const betCollectionRef = collection(db, "bets");

  useEffect(() => {
    const getBets = async () => {
      try {
        const data = await getDocs(betCollectionRef);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
  }, [betCollectionRef]);
  return (
    <div>
      <div className=" flex justify-center items-center my-6">
        <p className=" md:text-3xl text-2xl  font-bold text-shark text-center p-4">
          Check out our free Bet collections for today
        </p>
      </div>
      <div className="overflow-x-auto">
        {games.map((game) => {
          return (
            <div key={game.id}>
              <Table
                league={game.league}
                match={game.match}
                time={game.time}
                bet={game.bet}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

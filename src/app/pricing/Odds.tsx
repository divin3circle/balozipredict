import React, { useState, useEffect } from "react";
import Table from "./Table";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
type Bets = {
  id: string;
  league: string;
  match: string;
  time: string;
  bet: string;
};

export default function Odds() {
  const [bets, setBets] = useState<
    { id: string; league: string; match: string; time: string; bet: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const betCollectionRef = collection(db, "bets");

  useEffect(() => {
    const getBets = async () => {
      setLoading(true);
      try {
        const data = await getDocs(betCollectionRef);
        const filteredBet = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setBets(
          filteredBet as {
            id: string;
            league: string;
            match: string;
            time: string;
            bet: string;
          }[]
        );
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    getBets();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className="p-4 text-shark text-center font-bold text-lg">
          Loading..
        </h1>
      ) : (
        <div>
          <div className=" flex justify-center items-center my-6">
            <p className=" md:text-3xl text-2xl  font-bold text-shark text-center p-4">
              Check out our free Bet collections for today
            </p>
          </div>
          <div className="overflow-x-auto">
            {bets.map((bet) => {
              return (
                <div key={bet.id}>
                  <Table
                    league={bet?.league}
                    match={bet?.match}
                    time={bet?.time}
                    bet={bet?.bet}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Table from "./Table";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import YTable from "./YTable";

export default function YOdds() {
  const [pastBets, setPastBets] = useState<
    {
      id: string;
      matchResult: string;
      match: string;
      result: string;
      bet: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const pastBetCollectionRef = collection(db, "past");

  useEffect(() => {
    const getBets = async () => {
      setLoading(true);
      try {
        const data = await getDocs(pastBetCollectionRef);
        const filteredPastBet = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setPastBets(
          filteredPastBet as {
            id: string;
            matchResult: string;
            match: string;
            result: string;
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
    <div className="md:px-4 px-1">
      {loading ? (
        <h1 className="p-4 text-shark text-center font-bold text-lg">
          Loading..
        </h1>
      ) : (
        <div>
          <div className=" flex justify-center items-center my-6">
            <p className=" md:text-3xl text-2xl  font-bold text-shark text-center p-4">
              Our previous free Bets
            </p>
          </div>
          <div className="overflow-x-auto">
            {pastBets.map((bet) => {
              return (
                <div key={bet.id}>
                  <YTable
                    matchResult={bet?.matchResult}
                    match={bet?.match}
                    result={bet?.result}
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

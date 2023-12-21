import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Bets = {
  id: string;
  matchResult: string;
  match: string;
  result: string;
  bet: string;
};

export default function RemovePastBets() {
  const [bets, setBets] = useState<
    {
      id: string;
      matchResult: string;
      match: string;
      result: string;
      bet: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const betCollectionRef = collection(db, "past");

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

  const deleteBet = async (id: string) => {
    const betDoc = doc(db, "past", id);
    await deleteDoc(betDoc);
    toast.success(`Bet ID: ${id} deleted successfully✅`);
  };

  return (
    <div>
      {loading ? (
        <h1 className="p-4 text-center font-bold text-lg">Loading..</h1>
      ) : (
        <div>
          <div className=" flex justify-center items-center my-6">
            <p className=" md:text-3xl text-2xl  font-bold text-shark text-center p-4">
              Remove Predictions
            </p>
          </div>
          <div className="overflow-x-auto">
            {bets.map((bet) => {
              return (
                <div key={bet.id} className="flex justify-between items-center">
                  {/* <DeleteTable
                    league={bet?.league}
                    match={bet?.match}
                    time={bet?.time}
                    bet={bet?.bet}
                  /> */}
                  <div className="flex gap-2 md:gap-24 text-shark">
                    <h1
                      className={`md:text-lg text-xs ${
                        bet.result.toLocaleLowerCase() === "won"
                          ? "text-blue-500"
                          : "text-red-500"
                      }`}
                      style={{ width: "200px" }}
                    >
                      {bet.match}
                    </h1>
                    <h1 className="md:text-lg text-xs">{bet.bet}</h1>
                    {/* <div className="flex justify-end text-center">
                      <h1 className="md:text-lg text-xs">{bet.result}</h1>
                    </div> */}
                  </div>
                  <div>
                    <button
                      onClick={() => deleteBet(bet.id)}
                      className="rounded md:text-lg bg-red-600 px-4 my-2 py-2 text-xs font-medium text-white hover:text-shark hover:bg-transparent border-2 border-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

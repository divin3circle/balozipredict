import React, { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, writeBatch } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Odds from "../pricing/Odds";
import RemoveBets from "./RemoveBets";

export default function AddBet() {
  const [newBetLeague, setNewBetLeague] = useState("");
  const [newBetTime, setNewBetTime] = useState("");
  const [newBetGame, setNewBetGame] = useState("");
  const [newBetPrediction, setNewBetPrediction] = useState("");
  const betCollectionRef = collection(db, "bets");

  const onSubmitPrediction = async () => {
    try {
      await addDoc(betCollectionRef, {
        bet: newBetPrediction,
        league: newBetLeague,
        match: newBetGame,
        time: newBetTime,
      });
      toast.success("Prediction submitted successfully✅");
    } catch (e) {
      console.log(e);
      toast.error("Error submitting prediction, try again⛔️");
    }
    // setNewBetGame("");
    // setNewBetLeague("");
    // setNewBetPrediction("");
    // setNewBetTime("");
  };
  const handleClear = () => {
    async function clearCollection() {
      try {
        const querySnapshot = await getDocs(betCollectionRef);
        const batch = writeBatch(db);

        querySnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });

        await batch.commit();
        toast.success("Collection cleared successfully✅");
      } catch (error) {
        console.error("Error clearing collection:", error);
      }
    }
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-shark">
            Add Predictions for the Day!
          </h1>

          <p className="mt-4 text-gray-500">
            Hello Amos, this is where you add the predictions of games that will
            be played today. It is recommended to do this early in the morning
            so that the users find the games ready. Clear all the old
            predictions first.
          </p>
        </div>

        <RemoveBets />

        <div className="mx-auto mb-0 text-shark mt-8 max-w-md space-y-4">
          <p className=" md:text-3xl text-2xl  font-bold text-shark text-center p-4">
            Add New Predictions
          </p>
          <div>
            <label htmlFor="email" className="sr-only">
              League
            </label>

            <div className="relative">
              <input
                onChange={(e) => setNewBetLeague(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Country (ENG or ESP or GER)"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Time
            </label>

            <div className="relative">
              <input
                onChange={(e) => setNewBetTime(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Match time (23:00 or 16:00)"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Game
            </label>

            <div className="relative">
              <input
                onChange={(e) => setNewBetGame(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Game (Chelsea vs Manchester United)"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Prediction
            </label>

            <div className="relative">
              <input
                onChange={(e) => setNewBetPrediction(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Prediction (1 or 1 & OV3.5)"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Admin right reserved.
              <a className="underline" href="/">
                See
              </a>
            </p>

            <button
              onClick={onSubmitPrediction}
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Add Prediction ✅
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

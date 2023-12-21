import React, { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, writeBatch } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Odds from "../pricing/Odds";
import RemoveBets from "./RemoveBets";
import RemovePastBets from "./RemovePastBets";

export default function AddPastBet() {
  const [newBetMatch, setNewBetMatch] = useState("");
  const [newBetResult, setNewBetResult] = useState("");
  const [newBetGameResult, setNewBetGameResult] = useState("");
  const [newBetPrediction, setNewBetPrediction] = useState("");
  const betCollectionRef = collection(db, "past");

  const onSubmitPrediction = async () => {
    try {
      await addDoc(betCollectionRef, {
        bet: newBetPrediction,
        match: newBetMatch,
        matchResult: newBetGameResult,
        result: newBetResult,
      });
      toast.success("Prediction Editted successfully✅");
    } catch (e) {
      console.log(e);
      toast.error("Error editting prediction, try again⛔️");
    }
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl my-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-shark">
            Add Prediction of Completed Games
          </h1>

          <p className="mt-4 text-gray-500">
            This section allows you to edit the games that youwant to appear on
            the history bets on the pricing page. On this page you can edit the
            result of a game that has ended.
          </p>
        </div>
        <RemovePastBets />

        <div className="mx-auto mb-0 text-shark mt-8 max-w-md space-y-4">
          <p className=" md:text-3xl text-2xl  font-bold text-shark text-center p-4">
            Edit Past Predictions
          </p>
          <div>
            <label htmlFor="email" className="sr-only">
              Match
            </label>

            <div className="relative">
              <input
                onChange={(e) => setNewBetMatch(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Game(Chelsea vs Manchester United)"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Match Result
            </label>

            <div className="relative">
              <input
                onChange={(e) => setNewBetGameResult(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Match result (4 - 1) "
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Result
            </label>

            <div className="relative">
              <input
                onChange={(e) => setNewBetResult(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Result (won or lost)"
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
          R
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="flex justify-between px-8 mt-4">
        <h1 className="text-xl font-bold">Welcome Amos👋</h1>
        <button
          onClick={logOut}
          className="bg-blue-500 rounded font-semibold text-white px-4 py-2"
        >
          sign out
        </button>
      </div>
    </div>
  );
}

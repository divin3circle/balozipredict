"use client";
import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import Home from "./Home";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(auth?.currentUser?.email);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {auth?.currentUser?.email === "balozipredict@gmail.com" ? (
        <Home />
      ) : (
        <LoginComponent isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      )}
    </div>
  );
}

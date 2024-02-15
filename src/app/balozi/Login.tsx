"use client";
import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import Home from "./Home";

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      {isAdmin ? (
        <Home />
      ) : (
        <LoginComponent isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      )}
    </div>
  );
}

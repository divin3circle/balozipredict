"use client";
import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import Home from "./Home";

export default function Login() {
  const [admin, setAdmin] = useState<number>(0);
  const [correctPasscode, setCorrectPasscode] = useState<boolean>(false);
  const adminLogin = 12345;
  const handleClick = () => {
    if (admin !== adminLogin) {
      console.log("Wrong passcode");
      console.log(correctPasscode);
    } else {
      setCorrectPasscode(true);
      console.log("Login successful");
      console.log(correctPasscode);
    }
  };
  return (
    <div>
      {!correctPasscode ? (
        <LoginComponent
          setAdmin={setAdmin}
          handleClick={handleClick}
          correctPasscode={correctPasscode}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

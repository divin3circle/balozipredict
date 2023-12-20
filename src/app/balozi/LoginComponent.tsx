"use client";
import React from "react";
type LoginComponntProps = {
  setAdmin: React.Dispatch<React.SetStateAction<number>>;
  handleClick: () => void;
  correctPasscode: boolean;
};

export default function LoginComponent({
  setAdmin,
  handleClick,
  correctPasscode,
}: LoginComponntProps) {
  return (
    <div>
      <div className="h-screen mx-auto flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-blue-500 shadow-md flex-col items-center">
          <h1 className="text-center font-bold text-xl md:text-3xl my-4">
            Please Verify Your Idenity
          </h1>
          <input
            type="password"
            placeholder="Enter admin passcode"
            className="px-4 py-2 md:py-3 w-full my-4"
            onChange={(e) => setAdmin(Number(e.target.value))}
          />
          <div className="flex justify-center items-center">
            {" "}
            <button
              onClick={handleClick}
              className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md my-4 ${
                correctPasscode ? " cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

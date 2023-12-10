import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden backdrop-blur-xl">
      <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-filter backdrop-blur-xl">
        <div className="animate-spin ease-in duration-150 rounded-full h-32 w-32 border-t-4 border-blue-200 mb-4"></div>
        <span className="text-black text-lg font-semibold animate-pulse">
          Just a moment...
        </span>
      </div>
    </div>
  );
}

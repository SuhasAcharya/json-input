"use client";
import React from "react";

export default function Response({ darkMode, theme }: any) {
  return (
    <div className={`p-4 h-auto min-h-[25vh] w-full `}>
      <form action="" className="flex items-center justify-center">
        <label
          className={`w-[80%] h-auto flex flex-col items-center px-4 py-6 gap-y-8 ${theme} rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer border-blue`}
        >
          <span className={`mt-2 text-base leading-normal ${theme} `}>
            Response:
          </span>
        </label>
      </form>
    </div>
  );
}

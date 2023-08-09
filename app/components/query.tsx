"use client";
import React from "react";

export default function Query({ darkMode, theme }: any) {
  return (
    <div className={`p-4 h-auto w-full mt-[5%]`}>
      <form action="" className="flex items-center justify-center">
        <label
          className={`w-[80%] h-auto flex flex-col items-center px-4 py-6 gap-y-8 ${theme} rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer border-blue`}
        >
          <span className={`mt-2 text-base leading-normal ${theme}`}>
            Enter your query here
          </span>
          <textarea className="h-[60px] w-[90%] border-[1px] border-gray-400 rounded-lg p-2 text-lg font-semibold" />
          <button className="bg-blue-500 h-[50px] w-[20%] rounded-lg hover:bg-blue-700">
            <text
              className="text-white text-lg font-bold"
              onClick={(e) => e.preventDefault}
            >
              Send
            </text>
          </button>
        </label>
      </form>
    </div>
  );
}

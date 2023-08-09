"use client";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";

export default function Query({ darkMode, theme }: any) {
  return (
    <div className={`h-auto w-full border-t-2 border-green-400`}>
      <form action="" className="flex items-center justify-center">
        <label
          className={`w-[100%] h-auto flex flex-col items-center px-4 py-4 gap-y-4 ${theme} rounded-lg shadow-lg tracking-wide uppercase  cursor-pointer `}
        >
          <span className={`mt-2 text-base leading-normal ${theme}`}>
            Enter your query here
          </span>
          <div className={`w-[75%] relative mb-4`}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full "
            />
            <button
              className="btn btn-xs sm:btn-sm md:btn-md btn-outline  btn-success absolute right-0   "
              onClick={(e) => e.preventDefault()}
            >
              <BsFillSendFill />
            </button>
          </div>
        </label>
      </form>
    </div>
  );
}

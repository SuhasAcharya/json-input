"use client";
import React from "react";

export default function Request() {
  return (
    <div className="p-4 h-auto min-h-[25vh] w-full mt-[5%]">
      <form action="" className="flex items-center justify-center">
        <label className="w-[80%] h-auto flex flex-col items-center px-4 py-6 gap-y-8 bg-white rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer border-blue">
          <span className="mt-2 text-base leading-normal">Request:</span>
        </label>
      </form>
    </div>
  );
}

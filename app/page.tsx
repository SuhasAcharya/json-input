"use client";
import React, { useState } from "react";
import Input from "./components/input";
import Query from "./components/query";
import Request from "./components/request";
import Response from "./components/response";
import { BsMoon, BsSun } from "react-icons/bs";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-black" : "bg-white"}>
      <div className="ml-10 mt-6 border-[1px] rounded-md border-gray-700 w-10 flex items-center justify-center h-10 bg-slate-600 text-white">
        <button onClick={toggleTheme}>
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
      <Input darkMode={darkMode} />
      <Query darkMode={darkMode} />
      <Request darkMode={darkMode} />
      <Response darkMode={darkMode} />
    </div>
  );
};

export default Home;
